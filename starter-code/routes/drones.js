const express = require("express");

// require the Drone model here

const router = express.Router();

const Drone = require("../models/drones").Drone;

router.get("/", (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, result) => {
    if (err) {
      next(err);
    } else {
      // console.log(result);
      const data = {
        drones: result
      };
      res.render("drones/index", data);
    }
  });
});

router.get("/new", (req, res, next) => {
  // Iteration #3

  res.render("drones/new");
});

router.post("/", (req, res, next) => {
  // Iteration #3
  const newDrone = new Drone({
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  });

  newDrone.save(err => {
    res.redirect(`/`);
  });
});

module.exports = router;
