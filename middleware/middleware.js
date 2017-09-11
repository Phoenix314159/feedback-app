const cookieSession = require('cookie-session'),
    passport = require('passport'),
    config = require('../config/config'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    corsOptions = {
    origin: config.redirectUrl
    };

module.exports = app => {
    app.use(bodyParser.json());
    app.use(cors(corsOptions));
    app.use(
        cookieSession({
            maxAge: config.cookieAge,
            keys: [config.cookieKey]
        })
    );
    app.use(passport.initialize());
    app.use(passport.session());
}

