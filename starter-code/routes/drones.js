const express = require("express");

// require the Drone model here
var Drone = require("../models/drone").Drone;
const router = express.Router();

router.get("/", (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, result) => {
    if (err) {
      console.log("Error Monongo: ", err);
    } else {
      const data = {
        drones: result
      };
      res.render("drones", data);
    }
  });
});

router.get("/new", (req, res, next) => {
  // Iteration #3
  Drone.find({}, (err, result) => {
    if (err) {
      console.log("Error Monongo: ", err);
    } else {
      res.render("drones/new");
    }
  });
});

router.post("/", (req, res, next) => {
  // Iteration #3
  const droneInfo = {
    droneName: req.body.droneName,
    propellers: req.body.proppelers,
    maxSpeed: req.body.maxSpeed
  };
  const newDrone = new Drone(droneInfo);
  newDrone.save(err => {
    if (err) {
      return next(err);
    }
    return res.redirect("/drones");
  });
});

module.exports = router;
