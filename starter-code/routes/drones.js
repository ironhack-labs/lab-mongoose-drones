const express = require('express');
const Drone = require('../models/Drone');

// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  console.log("entrando a raiz de drones");
  Drone.find({}, (err, d) => {
    if (err) {
      return next;
    }else {
    res.render('drones/index', {
      drones: d
    });}
  });
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  console.log(req.body);
  let d = new Drone({
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed

  });
  d.save((err, obj) => {
    if (err) {
      return next;
    }else {
        res.redirect('/drones');
    }

  });
});

module.exports = router;
