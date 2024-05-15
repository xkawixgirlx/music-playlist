const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const playlistSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },  
    videos: [{
        type: Schema.Types.ObjectId,
        ref: 'Video'
    }],

}, {
    timestamps: true,
});



module.exports = mongoose.model('Playlist', playlistSchema);