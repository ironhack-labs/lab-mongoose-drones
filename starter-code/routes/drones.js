/*jshint esversion:6*/
const express = require('express');

// require the Drone model here
const Drone = require('../models/drone');
const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, function(err, drones) {
    if (err) return next(err);
    res.render('drones/index', {
      title: 'Drones View',
      drones
    });
  });
});

router.get('/drones/:id', (req, res, next) => {
  const id = req.params.id;
  Drone.findOne({
    _id: id
  }, function(err, drone) {
    if (err) return next(err);
    res.render('drones/show', {
      drone
    });
  });
});

/*router.get('/new', function(req, res, next) {
  res.render('new', {
    title: 'Add a new product'
  });
});

router.post('/new', function(req, res, next) {
  //const body = req.body;
  const droneName = req.body.droneName;
  const propellers = req.body.propellers;
  const maxSpeed = req.body.maxSpeed;
  const drone = new Drone(droneName, propellers, maxSpeed);
  drone.save(function(err, doc) {
    if (err) return next(err);
    res.redirect('/drone');
  });
});
*/


router.post('/drones', (req, res, next) => {
  // Iteration #4
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #6 (Bonus)
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #6 (Bonus)
});


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5 (Bonus)
});


module.exports = router;
