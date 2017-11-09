const express = require('express');

const Dron = require('../models/drone');

const router = express.Router();

// (app.js) drones --> /drones/ (drones.js) ==> /
router.get('/', (req, res, next) => {
  // Iteration #2
  Dron.find({}, (err, listOfDrones) => {
    if (err) { return next(err); }
    res.render('drones/index', {
      drones: listOfDrones
    });
  });
});


router.get('/new', (req, res, next) => {
  // Iteration #3
});

router.post('/', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
