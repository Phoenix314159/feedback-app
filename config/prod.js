module.exports = {
    port: process.env.PORT,
    db: process.env.MONGO_URI,
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    cookieKey: process.env.COOKIE_KEY,
    cookieAge: 2592000000,
    redirectUrl: `https://feedback-app123.herokuapp.com/`
}
