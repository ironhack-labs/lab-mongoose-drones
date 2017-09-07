const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone');
// require the Drone model here


router.get('/drones', (req, res, next) => {

  // RETRIEVE: Drone list
  router.get('/', (req, res, next) => {
    Drone.find({}, (err, Drones) => {
      if (err) {
        return next(err);
      }

      res.render( /*'Drones/Drone_list'*/ 'index', {
        title: 'List of Drones',
        Drones: Drones
      });
    });
  }); // Iteration #2
});


router.get('/drones/new', (req, res, next) => {
  res.render('new') // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
