const mongoose = require('mongoose'),
    requireLogin = require('../middleware/requireLogin'),
    requireCredits = require('../middleware/requireCredits'),
    Survey = mongoose.model('surveys'),
    Mailer = require('../services/Mailer'),
    surveyTemplate = require('../services/emailTemplates/surveyTemplate'),
    thanksTemplate = require('../services/emailTemplates/thanks'),
    _ = require('lodash'),
    Path = require('path-parser'),
    {URL} = require('url');

module.exports = app => {

    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send(thanksTemplate());
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
        const p = new Path('/api/surveys/:surveyId/:choice');
               _.chain(req.body)
                .map(({email, url}) => {
                    const match = p.test(new URL(url).pathname);
                    if (match) {
                        return {email, surveyId: match.surveyId, choice: match.choice};
                    }
                })
                .compact()
                .uniqBy('email', 'surveyId')
                .each(({surveyId, email, choice}) => {
                    Survey.updateOne({
                        _id: surveyId,
                        recipients: {
                        $elemMatch: {email: email, responded:false}
                    }
                    }, 
                    {
                        $inc: {[choice]: 1},
                        $set: {'recipients.$.responded': true},
                        lastResponded: new Date()
                    }
                  ).exec()
                })
                .value();
        
        res.send({});
    })

}
