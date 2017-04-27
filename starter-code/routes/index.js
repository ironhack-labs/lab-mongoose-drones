var express = require('express');
var router = express.Router();
const Drone = require('../models/drone.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Russian military drones' });
});

module.exports = router;
