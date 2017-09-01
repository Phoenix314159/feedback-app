const config = require('../config/config'),
    stripe = require('stripe')(config.stripeSecretKey);

module.exports = app => {

    app.post('/api/stripe', async (req, res) => {
        let charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        })
        console.log(charge)
    });
}
