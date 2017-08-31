const config = require('./config/config'),
    express = require('express'),
    mongoose = require('mongoose'),
    app = express();

mongoose.connect(config.db);

require('./models/user');
require('./services/passport');
require('./services/middleware')(app);
require('./routes/auth')(app);

app.use(express.static(__dirname + '/client/build'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
})

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
});