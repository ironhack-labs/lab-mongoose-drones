const express = require('express');

const DroneModel = require("../models/drone-model");

const router = express.Router();


router.get("/drones", (req, res, next) => {
  DroneModel
    .find()
    .limit(25)
    .exec()
    .then((droneResults) => {
      res.locals.listOfDronesResults = droneResults;

      res.render("drones/index");
    })
    .catch((err) => {
      next(err);
    });
});



router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render("drones/new");
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const theDrone = new DroneModel ({
    droneName : req.body.droneName,
    propellers : req.body.dronePropellers,
    maxSpeed : req.body.droneMaxSpeed
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
