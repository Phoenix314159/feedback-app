const mongoose = require('mongoose'),
    requireLogin = require('../middleware/requireLogin'),
    requireCredits = require('../middleware/requireCredits'),
    Survey = mongoose.model('surveys'),
    Mailer = require('../services/mailer'),
    surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {

    app.get('/api/surveys', requireLogin, (req, res) => {

    })

    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        const {title, subject, body, recipients} = req.body,
            survey = new Survey({
                title,
                subject,
                body,
                recipients: recipients.split(',').map(email => ({ email: email.trim() })),
                _user: req.user.id,
                dateSent: Date.now()
            });
        const mailer = new Mailer(survey, surveyTemplate(survey));
        mailer.send();

    })

    app.post('/api/surveys/webhooks', (req, res) => {

    })
}
