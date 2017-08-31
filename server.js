const config = require('./config/config'),
    express = require('express'),
    mongoose = require('mongoose'),
    app = express();

mongoose.connect(config.db);

require('./models/user');
require('./services/passport');
require('./services/middleware')(app);
require('./routes/auth')(app);

//<----------- production --------------->
// process.env.PWD = process.cwd();
// app.use('/', express.static(process.env.PWD + '/client/build'));
//<-------------------------------------->

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
});