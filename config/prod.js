module.exports = {
    port: process.env.PORT,
    mongoURI: process.env.MONGO_URI,
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    cookieKey: process.env.COOKIE_KEY,
    cookieAge: 2592000000,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    redirectUrl: `https://feedback-app12.herokuapp.com/`
}
