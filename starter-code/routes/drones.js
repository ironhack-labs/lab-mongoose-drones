const express = require('express');

// require the Drone model here
const Drone = require('../models/drone.model');

const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2
  Drone.find({}).then((drones) => {
    res.render('index', {
      drones: drones
    });
  });
});


router.get('/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new', {
    drone: {}
  })
});


router.post('/', (req, res, next) => {
  // Iteration #3

  const droneData = req.body;

  const newDrone = new Drone(droneData);

  newDrone.save().then((drone) => {
    res.redirect('/drones');
  })
});

router.post('/', (req, res, next) => {
      Drone.findById(req.params.id).then((drone) => {
        res.render('drones/new', {
          drone: drone
        });
      });
    });

  router.post('/',  (req, res, next) => {
      const droneId = req.params.id;
      const updates = {
        name: req.body.name,
        propellers: req.body.propellers,
        maxSpeed: req.body.maxSpeed
      };
    });


      module.exports = router;
