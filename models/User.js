const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  comments: [{
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  post: {
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
})

const User = mongoose.model('User', userSchema);

module.exports = User;