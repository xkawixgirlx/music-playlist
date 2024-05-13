const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const videoSchema = new Schema({
    videoUrl: {
        type: String,
        required: true,
        match: /^<iframe.+www\.youtube\.com\/embed.+<\/iframe>$/
    },
    youTubeId: {
        type: String, 
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
});



module.exports = mongoose.model('Video', videoSchema);