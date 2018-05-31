package mail

import (
	"net/smtp"
	"net/url"
)

// GmailMailer is a mail service that allows to send emails to gmail service
type GmailMailer struct {
	MailerInfo
}

// NewGmailMailer creates a new instance of the Mailer
func NewGmailMailer(host string, username string, password string, feedbackAddress string, from string) GmailMailer {
	return GmailMailer{
		MailerInfo: MailerInfo{
			host:            host,
			from:            from,
			username:        username,
			password:        password,
			feedbackAddress: feedbackAddress,
		},
	}
}

// SendFeedback sends mail to the feedback address
func (m GmailMailer) SendFeedback(l *Letter) error {
	l.To = m.feedbackAddress
	return m.SendMail(l)
}

// SendMail sends a letter
func (m GmailMailer) SendMail(l *Letter) error {
	host, err := url.Parse("//" + m.host)
	if err != nil {
		return err
	}

	auth := smtp.PlainAuth("", m.username, m.password, host.Hostname())

	to := []string{l.To}
	msg := getBody(l, m.from)

	return smtp.SendMail(m.host, auth, m.from, to, msg)
}
