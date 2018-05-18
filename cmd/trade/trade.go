package main

import (
	"flag"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
	"github.com/skycoin/getsky.org/db"
	"github.com/skycoin/getsky.org/src/mail"
	"github.com/skycoin/getsky.org/src/skycoinPrice"
	"github.com/skycoin/getsky.org/src/trade"
	"github.com/skycoin/getsky.org/src/util/logger"
)

func main() {
	bindingFlag := flag.String("binding", "0.0.0.0:8081", "HTTP server binding")
	mysqlFlag := flag.String("mysql", "0.0.0.0:3306", "HTTP server binding")
	recaptchaSecret := flag.String("recaptchaSecret", "6LcIDlkUAAAAAB7-YebjJSUBb2aINasOnNk0zF8W", "HTTP server binding")

	mailHost := flag.String("mailHost", "smtp.gmail.com:587", "HTTP server binding")
	mailUsername := flag.String("mailUsername", "test@email.com", "HTTP server binding")
	mailPassword := flag.String("mailPassword", "password", "HTTP server binding")
	feedbackAddress := flag.String("feedbackAddress", "test2@email.com", "HTTP server binding")

	flag.Parse()

	log := logger.InitLogger()

	sqlDb, err := initDb(*mysqlFlag)
	if err != nil {
		panic(err.Error())
	}

	auth := db.NewAuthenticator(sqlDb)
	storage := db.NewStorage(sqlDb)
	users := db.NewUsers(sqlDb)
	geo := db.NewGeo(sqlDb)
	messages := db.NewMessages(sqlDb)
	skycoinPrices := skycoinPrice.NewSkycoinPrices()
	mailer := mail.NewMailer(*mailHost, *mailUsername, *mailPassword, *feedbackAddress)
	skycoinPricesInterface := skycoinPrice.Service(skycoinPrices)

	server := trade.NewHTTPServer(*recaptchaSecret, *bindingFlag, storage, users, auth, log, geo, messages, mailer, &skycoinPricesInterface)
	skycoinPrices.StartUpdatingCycle()

	if err := server.Run(); err != nil {
		panic(err.Error())
	}
}

func initDb(addr string) (*sqlx.DB, error) {
	db, err := sqlx.Connect("mysql", fmt.Sprintf("root:root@(%s)/getskytrade?parseTime=true", addr))
	if err != nil {
		return nil, err
	}

	return db, nil
}
