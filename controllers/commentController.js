const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/classes/:id/post/:id', (req, res) => {
  const postId = req.params.id;
  const context = {
      body: req.body.body,
      post: req.params.id,
  }
  db.Comment.create(context, (err, newComment) => {
      if (err) {
          console.log(err);
      };
      db.Post.findByIdAndUpdate(
          postId,
          {$push: {comments: newComment._id} },
          {new: true},
          (err) => {
              if (err) {
                  console.log(err);
              };
          res.redirect(`/everdecision/classes/${req.params.character}/post/${req.params.id}`)
          }
      );
  });
});

router.put('/classes/:id/post/:id/:id', (req, res) => {
  const commentId = req.params.id;
  db.Comment.findByIdAndUpdate(
      commentId,
      req.body,
      {new: true},
      (err, updatedComment) => {
          if (err) {
              console.log(err)
          };
          const postId = updatedComment.post
          db.Post.findById(postId, (err, foundPost) => {
            if (err) {
              console.log(err)
            }
            res.redirect(`/everdecision/classes/${foundPost.character}/post/${foundPost.id}`)
          })
      }
  )
});

router.delete('/classes/:id/post/:id/:id', (req,res) => {
  const commentId = req.params.id;
  db.Comment.findByIdAndDelete(commentId, (err, deletedComment) => {
    if (err) console.log(err);
      db.Post.findById(deletedComment.post, (err, updatedPost) => {
        if (err) console.log(err);
          res.redirect(`/everdecision/classes/${req.params.id}/post/${deletedComment.post}`)
      }
    );
  });
});

module.exports = router;