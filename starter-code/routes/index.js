const express = require('express');
const router = express.Router();
const Drone = require("../models/drone.js");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Drnz' });
});

module.exports = router;
