const express = require('express');
const router = express.Router();
const playslistsCtrl = require('../../controllers/api/playlists');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



// All paths start with '/api/playlists'

// GET /api/playlists
router.get('/playlist', ensureLoggedIn, playslistsCtrl.getAll);



module.exports = router;