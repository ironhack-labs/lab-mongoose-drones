const express = require("express");

// require the Drone model here
const DroneModel = require("../models/drone-model");

const router = express.Router();


router.get("/drones", (req, res, next) => {
  // Iteration #2
  DroneModel
  .find()
  .exec()
  .then((droneResults) => {
    // create a local variable for the view to access the DB results
    res.locals.listOfDrones = droneResults;
    res.render("drone-views/drone-list");
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render("drone-views/drone-form");
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const theDrone = new DroneModel ({
    droneName: req.body.inputName,
    propellers: req.body.inputPropellers,
    maxSpeed: req.body.inputSpeed
  });

  theDrone.save()
    .then(() => {
      res.redirect('/drones');
    })
    .catch((err) => {
      next(err);
    });
});


module.exports = router;
