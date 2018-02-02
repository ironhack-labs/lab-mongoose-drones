const express = require('express');
const router = express.Router();

const avion = require('../models/Drones');
// require the Drone model here



router.get('/drones', (req, res, next) => {
  Drones.find().exec((err, drones) => {
    console.log(drones);
    if (err) { return next(err); }
    res.render('views/index', {
      drones: Drones
    });
  });


});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
