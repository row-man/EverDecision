const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    cClass: {
        type: String,
        required: true,
    },
    post: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
});

const Character = mongoose.model('character', characterSchema);

module.exports = Character;