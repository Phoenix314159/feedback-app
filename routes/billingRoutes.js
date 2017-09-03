const config = require('../config/config'),
    stripe = require('stripe')(config.stripeSecretKey),
    requireLogin = require('../middleware/requireLogin');

module.exports = app => {

    app.post('/api/stripe', requireLogin, async (req, res) => {
        let charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        })
        req.user.credits += 5;
        let user = await req.user.save();
        res.status(200).send(user);
    });
}
