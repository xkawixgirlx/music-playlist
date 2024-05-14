const Playlist = require('../../models/playlist');
const Video = require('../../models/video');


module.exports = {
    getAll,
    createPlaylist,
    getAllVideos,
    addNewVideo,
};



async function addNewVideo(req, res) {
    try {
        const video = new Video({
            youTubeId: req.body.youTubeId,
            user: req.body._id,
            videoUrl: req.body.videoUrl,
            artist: req.body.artist,
            title: req.body.title,
        });
        console.log(req.body);
        const savedVideo = await video.save();
        res.json(savedVideo);
    } catch (err) {
        console.log(' Error adding new video', err);
        res.status(500).json({ message: 'Failing at Controller' });
    }
}


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