const config = require('./config/config'),
    express = require('express'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 3367,
    app = express();

mongoose.connect(config.mongoURI);

require('./models/user');
require('./services/passport');
require('./middleware/middleware')(app);
require('./routes/auth')(app);
require('./routes/billingRoutes')(app);
require('./routes/getAlbums')(app);

//<----------- production --------------->
process.env.PWD = process.cwd();
app.use(express.static(process.env.PWD + '/client/build'));
app.get('*', (req, res) => {
    res.sendFile(process.env.PWD  + '/client/build/index.html');
})
//<-------------------------------------->

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});