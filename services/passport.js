const passport = require('passport'),
    googleStrategy = require('passport-google-oauth20').Strategy,
    config = require('../config/config'),
    mongoose = require('mongoose'),
    User = mongoose.model('users');


passport.serializeUser((user, done) => {
    done(null, user.id); // id assigned to user by mongo
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    })
})

passport.use(new googleStrategy({
    clientID: config.googleClientID,
    clientSecret: config.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({
        googleId: profile.id
    }).then(existingUser => {
        if (existingUser) {
            return done(null, existingUser);
        }
        new User({
            googleId: profile.id,
            name: profile.name.givenName,
            emailAddress: profile.emails[0].value
        }).save().then(user => done(null, user));
    })
}));




