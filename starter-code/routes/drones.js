const express = require('express');

const Drone = require('../models/drone.js');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find((err, droneList) => {
    if(err){
      next(err);
      return;
    }
    res.render('drones/index.ejs', {
    drones: droneList
    });
  });
});


router.get('/drones/new', (req, res, next) => {
    res.render('drones/new.ejs');
});

router.post('/drones/new', (req, res, next) => {
  const theDrone = new Drone({
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  });
  theDrone.save((err) => {
    if(err){
      next(err);
      return;
    }

    res.redirect('/drones');
  });
});

router.get('/drones/:id', (req, res, next) => {

  const droneId = req.params.id;
  console.log(droneId);

  Drone.findById( droneId, (err, theDrone) =>{
    if(err){
      next(err);
      return;
    }
    if (!theDrone) {
      next();
      return;
    }
    res.render('drones/details.ejs', {
      drone: theDrone
    });
  });
});

router.get('/drones/:id/edit', (req, res, next) => {
  const droneId = req.params.id;

  Drone.findById( droneId, (err, theDrone) => {
    if (err) {
      next(err);
      return;
    }
    res.render('drones/edit.ejs', {
      drone: theDrone
    });
  });
});

router.post('/drones/:id', (req, res, next) => {
  const droneId = req.params.id;

  const droneChanges = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };
  Drone.findByIdAndUpdate(
    droneId,
    droneChanges,
    (err, theDrone) => {
      if(err) {
        next(err);
        return;
      }
      res.redirect('/drones');
    });
});

module.exports = router;
