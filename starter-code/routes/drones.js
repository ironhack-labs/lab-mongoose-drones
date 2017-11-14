const express = require('express');

// require the Drone model here

const router = express.Router();

const DroneModel = require("../models/drone-model.js");


router.get('/drones', (req, res, next) => {
  DroneModel.find().exec().then(droneResults => {
    res.locals.listOfDrones = droneResults;
    res.render("drones/index.ejs");
  })
  .catch(error => {
     next(error);
  });
}); // GET


router.get('/drones/new', (req, res, next) => {
  res.render("drones/new.ejs");
});

router.post('/drones', (req, res, next) => {
  const theDrone = new DroneModel({
    droneName: req.body.droneName ,
    propellers: req.body.dronePropellers,
    maxSpeed: req.body.droneMaxSpeed
  }).save().then(() => {
    res.redirect('/drones');
  }).catch(error => {
    next(error);
  });
});

module.exports = router;
