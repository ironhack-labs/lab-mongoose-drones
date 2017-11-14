const express = require('express');

// require the Drone model here
const DroneModel = require("../models/drone");

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2
  DroneModel
  .find()
  .limit(25)
  .sort({ dateAdded: -1})
  .exec()
  .then((droneResults) => {
    res.locals.listOfDrones = droneResults;
    res.render("drones/drone-list");
    // console.log("Drone Success!");
  })
  .catch((err) => {
    next(err);
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render("drones/drone-form");
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const theDrone = new DroneModel({
    droneName: req.body.DroneName,
    propellers: req.body.DronePropellers,
    maxSpeed: req.body.DroneMaxSpeed
  });

theDrone.save()
  .then(() => {
    res.redirect("/drones");
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
