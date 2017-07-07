const express = require('express');
const Drone = require('../models/Drone');
const router = express.Router();

router.get('/drones', (req, res) => {
  Drone.find({}, (err, p) => {
    if (err){
    return next(err);
    }
    res.render('drones/index', {
      drones: p
    });
  });
});

router.get('/drones/new', (req, res, next) => {
  res.render('drones/new', {
    title: 'DRONES'
  });
});

router.post('/drones', (req, res, next) => {
  let drone = new Drone({
    droneName  : req.body.droneName,
    propellers : req.body.propellers,
    maxSpeed   : req.body.maxSpeed
  });
  drone.save((err, obj) => {
    if(err){
      return next();
    }
    res.redirect('/drones');
  });
});


module.exports = router;
