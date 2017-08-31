const axios = require('axios');

module.exports = app => {

    app.get('/api/albums', async (req, res) => {
        let response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
        res.send(response.data);
    })
}
