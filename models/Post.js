const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    character: {
      type : mongoose.Schema.Types.ObjectId,
      ref: 'Character'
    },
    comments: [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, {timestamps: true});

const Post = mongoose.model('Post',postSchema);

module.exports = Post;