const localtunnel = require('localtunnel'),
    config = require('../config/config');

localtunnel(config.port, { subdomain: 'phantomphoenixdudeheymandudestrfhsdfrhg' }, (err, tunnel) => {
    console.log('LT running');
})
