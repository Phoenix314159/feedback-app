const config = require('./config/config'),
    express = require('express'),
    mongoose = require('mongoose'),
    app = express();

mongoose.connect(config.db);

require('./services/middleware')(app);
require('./models/user'); // has to be required first so passport can access users model
require('./services/passport');
require('./routes/auth')(app);
require('./routes/home')(app);
require('./routes/getAlbums')(app);

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
});