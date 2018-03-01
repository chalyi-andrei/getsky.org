package trade

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"time"

	"github.com/AlexSugak/getsky-trade/src/auth"
	"github.com/AlexSugak/getsky-trade/src/board"
	"github.com/AlexSugak/getsky-trade/src/util/httputil"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/sirupsen/logrus"
)

// HTTPServer holds http server info
type HTTPServer struct {
	binding       string
	board         board.Board
	authenticator auth.Authenticator
	log           logrus.FieldLogger
	httpListener  *http.Server
	quit          chan os.Signal
	done          chan struct{}
}

// NewHTTPServer creates new http server
func NewHTTPServer(binding string, board board.Board, auth auth.Authenticator, log logrus.FieldLogger) *HTTPServer {
	return &HTTPServer{
		binding:       binding,
		board:         board,
		authenticator: auth,
		log: log.WithFields(logrus.Fields{
			"prefix": "trade.http",
		}),
		quit: make(chan os.Signal, 1),
		done: make(chan struct{}),
	}
}

// Run starts http listener and returns error if any
func (s *HTTPServer) Run() error {
	log := s.log
	log.Infof("HTTP service start at %s", s.binding)
	defer log.Info("HTTP service stop")
	signal.Notify(s.quit, os.Interrupt)

	r := s.setupRouter()

	s.httpListener = &http.Server{
		Addr:         s.binding,
		WriteTimeout: time.Second * 15,
		ReadTimeout:  time.Second * 15,
		IdleTimeout:  time.Second * 15,
		Handler:      r,
	}

	errorC := make(chan error)
	go func() {
		if err := s.httpListener.ListenAndServe(); err != nil {
			log.Error(err)
			errorC <- err
		}
	}()

	select {
	case err := <-errorC:
		return err
	case <-s.quit:
		return s.Shutdown()
	}
}

// Shutdown shuts down the http listener
func (s *HTTPServer) Shutdown() error {
	s.log.Info("HTTP service shutting down")
	close(s.done)

	// Create a deadline to wait for.
	wait := time.Second * 5
	ctx, cancel := context.WithTimeout(context.Background(), wait)
	defer cancel()
	// Doesn't block if no connections, but will otherwise wait
	// until the timeout deadline.
	return s.httpListener.Shutdown(ctx)
}

func (s *HTTPServer) setupRouter() http.Handler {
	r := mux.NewRouter()

	API := func(h func(*HTTPServer) httputil.APIHandler) http.HandlerFunc {
		return httputil.JSONHandler(httputil.ErrorHandler(s.log, h(s)))
	}

	Secure := func(h http.HandlerFunc) http.HandlerFunc {
		return auth.Middleware(h)
	}

	r.HandleFunc("/api", httputil.ErrorHandler(s.log, APIInfoHandler(s))).Methods("GET")

	r.HandleFunc("/api/users/authenticate", API(AuthenticateHandler)).Methods("POST")
	r.HandleFunc("/api/me", Secure(API(MeHandler))).Methods("GET")

	// NOTE: we should not use "adverts" word as part of api path since it can be blocked by AdBlock or similar browser extention
	r.HandleFunc("/api/postings/sell/latest", API(LatestSellAdvertsHandler)).Methods("GET")
	r.HandleFunc("/api/postings/buy/latest", API(LatestBuyAdvertsHandler)).Methods("GET")

	// TODO: enable CORS
	originsOk := handlers.AllowedOrigins([]string{"*"})
	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	h := handlers.CORS(originsOk, headersOk, methodsOk)(r)
	return h
}

// APIInfoResponse holds basic API information
type APIInfoResponse struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Version     int    `json:"version"`
}

// APIInfoHandler returns api info
// Method: GET
// Content-type: application/json
// URI: /api
func APIInfoHandler(s *HTTPServer) httputil.APIHandler {
	return func(w http.ResponseWriter, r *http.Request) error {
		info := APIInfoResponse{
			Name:        "trade API",
			Description: "trade API provides endpoints to enable posting and searching Skycoin buy and sell adverts",
			Version:     1,
		}

		return json.NewEncoder(w).Encode(info)
	}
}

// AuthenticateRequest holds auth data
type AuthenticateRequest struct {
	UserName string `json:"username"`
	Password string `json:"password"`
}

// AuthenticateResponse holds generated token response
type AuthenticateResponse struct {
	Token string `json:"token"`
}

// AuthenticateHandler handles user authentication
// Method: POST
// Accept: application/json
// URI: /api/users/authenticate
// Args:
//    {"username": "...", "password": "..."}
func AuthenticateHandler(s *HTTPServer) httputil.APIHandler {
	return func(w http.ResponseWriter, r *http.Request) error {

		w.Header().Set("Accept", "application/json")

		if err := httputil.ValidateContentType(r, "application/json"); err != nil {
			return err
		}

		req := AuthenticateRequest{}
		decoder := json.NewDecoder(r.Body)
		if err := decoder.Decode(&req); err != nil {
			err = fmt.Errorf("Invalid json request body: %v", err)
			return httputil.StatusError{
				Err:  err,
				Code: http.StatusBadRequest,
			}
		}

		valid, err := s.authenticator.VerifyPassword(req.UserName, req.Password)
		if err != nil {
			return err
		}

		if valid != true {
			return httputil.StatusError{
				Err:  errors.New("invalid username of password"),
				Code: http.StatusUnauthorized,
			}
		}

		token, err := auth.GetToken(req.UserName)
		if err != nil {
			return err
		}

		resp := AuthenticateResponse{
			Token: token,
		}

		return json.NewEncoder(w).Encode(resp)
	}
}

// MeResponse holds basic logged in user intofation
type MeResponse struct {
	UserName string `json:"username"`
}

// MeHandler returns currently logged in user info
// Method: GET
// Content-type: application/json
// URI: /api/me
func MeHandler(s *HTTPServer) httputil.APIHandler {
	return func(w http.ResponseWriter, r *http.Request) error {
		info := APIInfoResponse{
			Name: "todo",
		}

		return json.NewEncoder(w).Encode(info)
	}
}

// LatestSellAdvertsHandler returns 10 latest sell adverts
// Method: GET
// Content-type: application/json
// URI: /api/postings/sell/latest
func LatestSellAdvertsHandler(s *HTTPServer) httputil.APIHandler {
	return func(w http.ResponseWriter, r *http.Request) error {
		adverts, err := s.board.GetLatestAdverts(board.Sell, 10)
		if err != nil {
			return err
		}

		return json.NewEncoder(w).Encode(adverts)
	}
}

// LatestBuyAdvertsHandler returns 10 latest buy adverts
// Method: GET
// Content-type: application/json
// URI: /api/postings/buy/latest
func LatestBuyAdvertsHandler(s *HTTPServer) httputil.APIHandler {
	return func(w http.ResponseWriter, r *http.Request) error {
		adverts, err := s.board.GetLatestAdverts(board.Buy, 10)
		if err != nil {
			return err
		}

		return json.NewEncoder(w).Encode(adverts)
	}
}
