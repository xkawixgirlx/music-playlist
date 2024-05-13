const express = require('express');
const router = express.Router();
const playslistsCtrl = require('../../controllers/api/playlists');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



// All paths start with '/api/playlists'

// GET /api/playlists
router.get('/', ensureLoggedIn, playslistsCtrl.getAll);
// POST /api/playlists (add a new Playlist)
router.post('/', ensureLoggedIn, playslistsCtrl.createPlaylist);


module.exports = router;