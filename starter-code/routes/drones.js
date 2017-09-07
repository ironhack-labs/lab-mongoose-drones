const express = require('express');
const Drone = require('../models/drone');

// require the Drone model here

const router = express.Router();


router.get('/', (req, res, next) => {

  Drone.find({}, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.render('drones/index', {res: result})
      }
    });
});


router.get('/new', (req, res, next) => {
  // Iteration #3
});

router.post('/', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
