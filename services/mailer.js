const sendgrid = require('sendgrid'),
    helper = sendgrid.mail,
    config = require('../config/config');

class Mailer extends helper.Mail {
    constructor({subject, recipients}, content) {
        super();

        this.sgApi = sendgrid(config.sendGridKey);
        this.from_email = new helper.Email('no-reply@feedbackapp.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);

        this.recipients = this.formatAddresses(recipients);
        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }

    formatAddresses(recipients) {
        return recipients.map(({email}) => {
            return new helper.Email(email);
        })
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings(),
            clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients() {
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        })
        this.addPersonalization(personalize);
    }

    async send() {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });
        const response = this.sgApi.API(request, (error, res) => {
            if (error) {
                console.log("Error response received");
            }
            console.log(res)
            console.log('status code: ', res.statusCode);
            console.log('body: ', res.body);
            console.log('headers: ', res.headers);
        });
        return response;
    }
}


module.exports = Mailer;