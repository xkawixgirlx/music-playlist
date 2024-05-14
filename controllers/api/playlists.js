const Playlist = require('../../models/playlist');
const Video = require('../../models/video');


module.exports = {
    getAll,
    createPlaylist,
    getAllVideos,
};


async function getAllVideos(req, res) {
    const videos = await Video.find({
        user: req.user._id
    });
    res.json(videos);
}


async function createPlaylist(req, res) {
    req.body.user = req.user._id;
    const playlist = await Playlist.create(req.body);
    res.json(playlist);
}



async function getAll(req, res) {
    const playlists = await Playlist.find({
        user: req.user._id
    });
    res.json(playlists);
}