const passport = require('passport'),
    config = require('../config/config');

module.exports = app => {
    app.get('/api/login', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))
    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
      res.redirect(config.redirectUrl);
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send("dude");
    });
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}
