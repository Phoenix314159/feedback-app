const passport = require('passport'),
    googleStrategy = require('passport-google-oauth20').Strategy,
    config = require('../config/config'),
    mongoose = require('mongoose'),
    User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    let user = await User.findById(id);
    done(null, user);
})
passport.use(new googleStrategy({
    clientID: config.googleClientID,
    clientSecret: config.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    let existingUser = await User.findOne({
        googleId: profile.id
    });
    if (existingUser) {
        return done(null, existingUser);
    }
    let user = await new User({
        googleId: profile.id,
        name: profile.name.givenName,
        emailAddress: profile.emails[0].value
    }).save();
    done(null, user);

}));