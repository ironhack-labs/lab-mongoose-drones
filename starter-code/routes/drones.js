const express = require('express');
const router = express.Router();
const Drone = require('../models/drone');


// require the Drone model here
router.get('/', function(req, res, next) {
  // res.send(db.drones.find().pretty());
  Drone.find({}, (err, drones) => {
    if (err) {
      return next(err);
    }
    res.render('index', {title: "Hello"});
  });
});

router.get('/drones', (req, res, next) => {
  // Iteration #2
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
