const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.Character.findById
})



module.exports = router;