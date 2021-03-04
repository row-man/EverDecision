const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/classes/:id', (req, res) => {
  db.Post.find({}, (err, allPosts) => {
      if (err) {
          console.log(err);
      };
      const context = {
          showPost: allPosts,
      }
      res.render('showPost', context)
  });
});

router.post('/classes/:id', (req, res) => {
  req.body.character = req.params.id
  db.Post.create(req.body, (err, newPost) => {
      if (err) console.log(err)
      db.Character.findById(req.params.id, (err, foundChar) => {
        if (err) console.log(err)
        foundChar.posts.push(newPost._id),
        foundChar.save()
      })
      res.redirect(`/everdecision/classes/${req.params.id}`)
  });
});

router.get('/classes/:id/post/:id', (req, res) => {
  const postData = req.params.id;
  db.Post.findById(postData)
  .populate('comments')
  .exec((err, foundPost) => {
      if (err) {
          console.log(err)
      };
      const context = {
          showPost: foundPost
        };
      res.render('showPost', context)
  });
});

router.get('/classes/:id/post/:id/edit', (req, res) => {
  const postId = req.params.id;
  db.Post.findById(postId, (err, foundPost) => {
    if (err) {
      console.log(err)
    }
    const context = {
      showPost: foundPost
    }
    res.render('editPost', context)
  })
});

router.put('/classes/:classId/post/:postId', (req, res) => {
  console.log(req.params.classId, "LOOOOK HERE!!!!!!!!!!!")
  const postId = req.params.id;
  const editedPost = {
      name: req.body.name,
      title: req.body.title,
      body: req.body.body,
      img: req.body.img
  }
  db.Post.findByIdAndUpdate(
      postId,
      editedPost,
      { new: true },
      (err, postUpdated) => {
      });
      console.log(postId)
      res.redirect(`/everdecision/classes/${postId}`)
      console.log(req.params.classId, "LOOOOK HERE!!!!!!!!!!!")
});



module.exports = router;