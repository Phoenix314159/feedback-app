const config = require('./config/config'),
    express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    app = express();

mongoose.connect(config.mongoURI);

require('./models/user');
require('./models/survey');
require('./services/passport');
require('./middleware/middleware')(app);
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);
require('./routes/getAlbums')(app);

//<---------- production ----------->
if (process.env.NODE_ENV === 'production') {
    process.env.PWD = process.cwd();
    app.use(express.static(process.env.PWD + '/client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(process.env.PWD, 'client', 'build', 'index.html'));
    })
}
//<--------------------------------->

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
});