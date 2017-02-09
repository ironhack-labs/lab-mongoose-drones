/* jshint esversion:6 */
const express = require('express');

const Drone = require('../models/drone.js');
const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find({}, function (err, drones) {
    if (err) return next(err);
    res.render('drones/index', {drones});
  });
});


router.get('/drones/new', (req, res, next) => {
    res.render('drones/new', {
    title: 'Add a new drone'
  });
});

router.post('/drones', (req, res, next) => {
  const {droneName, propellers, maxSpeed} = req.body;
  const newDrone = new Drone({droneName, propellers, maxSpeed});
  newDrone.save(function (err, doc) {
    if (err) return next(err);
    res.redirect('/drones');
  });
});

router.get('/drones/:id', (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  Drone.findById(id, function (err, drones) {
    if (err) return next(err);
    res.render('drones/show', {drones});
  });
});


router.get('/drones/:id/edit', (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  Drone.findById(id, function (err, drones) {
    if (err) return next(err);
    res.render('drones/edit', {drones});
  });
});

router.post('/drones/:id', (req, res, next) => {
  const {droneName, propellers, maxSpeed} = req.body;
  const newDrone = new Drone({droneName, propellers, maxSpeed});
  Drone.findByIdAndUpdate(id, function (err, {droneName, propellers, maxSpeed}) {
    if (err) return next(err);
    res.render('/drones/:id', {droneName, propellers, maxSpeed});
  });
});


router.post('/drones/:id/delete', (req, res, next) => {
  Drone.findAndDelete(id, function (err, {drones}) {
    if (err) return next(err);
    res.render('GET /drones', {drones});
  });
});


module.exports = router;
