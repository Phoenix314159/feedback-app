const mongoose = require('mongoose'),
    requireLogin = require('../middleware/requireLogin'),
    requireCredits = require('../middleware/requireCredits'),
    Survey = mongoose.model('surveys'),
    Mailer = require('../services/Mailer'),
    surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {

    app.get('/api/survey/thanks', (req, res) => {
        res.send('Thanks for voting!');
    })

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const {title, subject, body, recipients} = req.body,
            survey = new Survey({
                title,
                subject,
                body,
                recipients: recipients.split(',').map(email => ({email: email.trim()})),
                _user: req.user.id,
                dateSent: Date.now()
            }),
            mailer = new Mailer(survey, surveyTemplate(survey));

        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            res.status(200).send(user);
        }
        catch (err) {
            res.status(422).send(err);
        }
    })

    app.post('/api/surveys/webhooks', (req, res) => {

    })
}
