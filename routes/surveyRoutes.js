const requireLogin = require('../middleware/requireLogin'),
    requireCredits = require('../middleware/requireCredits');

module.exports = app => {

    app.get('/api/surveys', requireLogin,(req, res) => {

    })

    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {

    })

    app.post('/api/surveys/webhooks', (req, res) => {

    })
}
