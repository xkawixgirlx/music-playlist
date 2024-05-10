const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const playlistSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    track: {
        type: String,
        required: true,
    },
    video: [{
        type: Schema.Types.ObjectId,
        ref: 'Video'
    }],

}, {
    timestamps: true,
});



module.exports = mongoose.model('Playlist', playlistSchema);