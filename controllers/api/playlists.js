const Playlist = require('../../models/playlist');
const Video = require('../../models/video');


module.exports = {
    getAll,
    createPlaylist,
    addVideoToPlaylist,
    addNewVideoToPlaylist,
    getById,
};


async function getById(req, res) {
    const playlist = await Playlist.findOne({
        _id: req.params.playlistId, user: req.user._id
    }).populate('videos');
    res.json(playlist);
}


async function addNewVideoToPlaylist(req, res) {
    const playlist = await Playlist.findOne({ _id: req.params.playlistId, user: req.user._id });
    if (playlist) {
        try {
            req.body.youTubeId = req.body.videoUrl.match(/^<iframe.+www\.youtube\.com\/embed\/(.+)\?.+<\/iframe>$/)[1];
            req.body.user = req.user._id;
            // Find video if exists, otherwise create/insert it
            const video = await Video.findOneAndUpdate(
                { youTubeId: req.body.youTubeId },
                req.body,
                { upsert: true, new: true }
            );
            if (playlist.videos.some(v => v._id.equals(video._id))) {
                await playlist.populate('videos');
                return res.json(playlist);
            }
            playlist.videos.push(video._id);
            await playlist.save();
            await playlist.populate('videos');
            res.json(playlist);
        } catch (err) {
            console.log(' Error adding new video', err);
            res.status(500).json({ message: 'Failing at Controller' });
        }
    } else {
        res.status(403).json('Unauthorized');
    }
}


async function addVideoToPlaylist(req, res) {
    const playlist = await Playlist.findOne({ _id: req.params.playlistId, user: req.user._id });
    if (playlist) {
        playlist.videos.push(req.params.videoId);
        await playlist.save();
        await playlist.populate(videos);
        res.json(playlist);
    } else {
        res.status(403).json('Unauthorized');
    }
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