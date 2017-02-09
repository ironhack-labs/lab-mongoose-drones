const express = require('express');

// require the Drone model here

const router = express.Router();
const Drone = require('../models/drones')


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, function(err, drones){
    if (err) return next (err);
      res.render('drones.ejs', {drones});
  });
});

router.get('/drones/new', (req, res, next) => {
  // Iteration #4
  res.render('new', {
  })
});

router.post('/drones', (req, res, next) => {
  // Iteration #4
  const body = req.body
  const drones = new Drone(body)
  drones.save(function (err, doc) {
    if (err) return next(err)
    Drone.find({}, function(err, drones){
      if (err) return next (err)
        res.render('drones.ejs', {drones})
    });
  })
});


router.get('/drones/:id', (req, res, next) => {
  // Iteration #3
  const id = req.params.id
  console.log(id)
  Drone.findOne({_id: id}, function (err, drone) {
    console.log(drone)
    if (err) return next(err)
    res.render('show', {drone})
  })
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #6 (Bonus)
  const id = req.params.id
  Drone.findOne({_id: id}, function (err, drone) {
    if (err) return next(err)
    res.render('edit', {drone})
  })
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #6 (Bonus)
  const id = req.params.id
  const body = req.body
  const {droneName, propellers, maxSpeed} = body

  const criteria = {_id: id}
  const update = {$set: {droneName, propellers, maxSpeed}}

  Drone.updateOne(criteria, update, function (err, drone) {
    if (err) return next(err)
    Drone.find({}, function(err, drones){
      if (err) return next (err)
        res.render('drones.ejs', {drones})
    });
  })
});


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5 (Bonus)
  const id = req.params.id
  const criteria = {_id: id}
  Drone.remove(criteria, function (err) {
    if (err) return next(err)
    res.redirect('/drones')
  })
});


module.exports = router;
