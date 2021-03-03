const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    cClass: {
        type: String,
        required: true,
    },
    post: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
});

const Character = mongoose.model('character', CharacterSchema);

module.exports = Character;
