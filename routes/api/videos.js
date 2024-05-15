const express = require('express');
const router = express.Router();
const videosCtrl = require('../../controllers/api/videos');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



// All paths start with '/api/videos'



// GET /api/videos (get all videos)
router.get('/', ensureLoggedIn, videosCtrl.getAllVideos);
// GET /api/videos (get videos for Carousel)
router.get('/', ensureLoggedIn, videosCtrl.getVideosForCarousel);
// POST /api/videos (add new videos)
router.post('/', ensureLoggedIn, videosCtrl.addNewVideo);


module.exports = router;