const sendgrid = require('sendgrid'),
    helper = sendgrid.mail,
    config = require('../config/config');

class Mailer extends helper.Mail {
    constructor({ subject, recipients}, content) {
      super();
      this.from_email = new helper.Email('no-reply@feedbackapp.com');
      this.subject = subject;
      this.body = new helper.Content('text/html', content);
      this.recipients = this.formatAddresses(recipients);
    }
}


module.exports = Mailer;