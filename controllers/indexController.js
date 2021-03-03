const express = require('express');
const router = express.Router();
const db = require('../models');

// router.get('/', (req, res) => {
//   res.render('index');
// });

router.get('/', (req, res) => {
  db.Character.find({}, (err, allChar) => {
    if (err) {
      console.log(err)
    };
    console.log(allChar)
    const context = {
      allClasses: allChar,
    }
    console.log(allChar.length)
    res.render('index', context)
  })
})

// router.get('/', (req, res) => {
//   db.Post.findById({}, (err, allPosts) => {
//       if (err) {
//           console.log(err);
//       };
//       const context = {
//           showPost: allPosts,
//       }
//       res.render('index', context)
//   });
// });



// router.get('/classes/cleric', (req, res) => {
//   res.render('classes/cleric')
// })

// router.get('/classes/druid', (req, res) => {
//   res.render('classes/druid')
// })

// router.get('/classes/enchanter', (req, res) => {
//   res.render('classes/enchanter')
// })

// router.get('/classes/magician', (req, res) => {
//   res.render('classes/magician')
// })

// router.get('/classes/monk', (req, res) => {
//   res.render('classes/monk')
// })

// router.get('/classes/necromancer', (req, res) => {
//   res.render('classes/necromancer')
// })

// router.get('/classes/paladin', (req, res) => {
//   res.render('classes/paladin')
// })

// router.get('/classes/ranger', (req, res) => {
//   res.render('classes/ranger')
// })

// router.get('/classes/rogue', (req, res) => {
//   res.render('classes/rogue')
// })

// router.get('/classes/shadowknight', (req, res) => {
//   res.render('classes/shadowknight')
// })

// router.get('/classes/shaman', (req, res) => {
//   res.render('classes/shaman')
// })

// router.get('/classes/warrior', (req, res) => {
//   res.render('classes/warrior')
// })

// router.get('/classes/wizard', (req, res) => {
//   res.render('classes/wizard')
// })

router.get('/login', (req, res) => {
  res.render('login')
})

module.exports = router;