const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.Character.find({}, (err, allChar) => {
    if (err) console.log(err);
    const context = {allClasses: allChar}
    res.render('index', context)
  });
});

router.get('/classes/:id', (req, res) => {
  const charData = req.params.id;
  db.Character.findById(charData)
  .populate('posts')
  .exec((err, foundChar) => {
    if (err) console.log(err);
    const context = {showChar: foundChar};
    res.render('showclass', context)
  });
});

module.exports = router;