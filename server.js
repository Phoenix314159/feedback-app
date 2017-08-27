const config = require('./config/config'),
    express = require('express'),
    axios = require('axios'),
    mongoose = require('mongoose'),
    app = express();

mongoose.connect(config.db);

require('./services/middleware')(app);
require('./models/user'); // has to be required first so passport can access users model
require('./services/passport');
require('./routes/auth')(app);
require('./routes/home')(app);

const fetchAlbums = async () => {
    const res = await axios({
        method: 'get',
        url: 'https://rallycoding.herokuapp.com/api/music_albums'
    })
    console.log(res.data);
}
fetchAlbums();

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
});