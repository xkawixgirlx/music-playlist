const express = require('express');
const router = express.Router();
const playslistsCtrl = require('../../controllers/api/playlists');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



// All paths start with '/api/playlists'

// GET /api/playlists
router.get('/', ensureLoggedIn, playslistsCtrl.getAll);
// GET /api/playlists/:playlistId (get one playlist)
router.get('/:playlistId', ensureLoggedIn, playslistsCtrl.getById);
// POST /api/playlists (add a new Playlist)
router.post('/', ensureLoggedIn, playslistsCtrl.createPlaylist);
// POST  /api/playlists/:playlistsId/videos (add new video to playlist)
router.post('/:playlistId/videos', ensureLoggedIn, playslistsCtrl.addNewVideoToPlaylist);
// PUT /api/playlists/:playlistId/videos/:videoId (associate playlist and video)
router.put('/:playlistId/videos/:videoId', ensureLoggedIn, playslistsCtrl.addVideoToPlaylist);




module.exports = router;