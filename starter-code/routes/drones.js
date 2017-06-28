const express = require('express');

const DroneModel = require("../models/drone-model.js");

const router = express.Router();


router.get('/drones', (req, res, next) => {
  DroneModel.find((err, droneResults) => {
    if (err) {
      next(err);
      return;
    }
    res.render("drones/index-drone.ejs", {
      dronesAndStuff: droneResults
    });
  });
});


router.get('/drones/new', (req, res, next) => {
  DroneModel.find((err, droneResults) => {
    if (err) {
      next(err);
      return;
    }
    res.render("drones/new.ejs", {
      dronesAndStuff: droneResults
    });
  });
});

router.post('/drones', (req, res, next) => {
  const theDrone = new DroneModel({
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  });

  theDrone.save((err) => {
    if(err) {
      next(err);
      return;
    }
    res.redirect("/drones");
  });
});

module.exports = router;
