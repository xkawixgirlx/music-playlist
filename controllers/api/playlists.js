const Playlist = require('../../models/playlist');


module.exports = {
    getAll,
};



async function getAll(req, res) {
    const playlists = await Playlist.find({
        user: req.user._id
    });
    res.json(playlists);
}