const Video = require('../../models/video');


module.exports = { 
    getAllVideos,
    addNewVideo,
};



async function addNewVideo(req, res) {
    try {
        req.body.youTubeId = req.body.videoUrl.match(/^<iframe.+www\.youtube\.com\/embed\/(.+)\?.+<\/iframe>$/)[1];
        req.body.user = req.user._id;
        // Ensure that videoUrl in videoSchema has unique: true set
        const video = await Video.create(req.body);
        res.json(video);
    } catch (err) {
        console.log(' Error adding new video', err);
        res.status(500).json({ message: 'Failing at Controller' });
    }
}


async function getAllVideos(req, res) {
    const videos = await Video.find({});
    res.json(videos);
}

