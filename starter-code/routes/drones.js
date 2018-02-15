const express = require("express");

// require the Drone model here
const Drone = require("../models/drone");

const router = express.Router();

router.get("/", (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, drones) => {
    if (err) {
      return next(err);
    }

    res.render("./drones/index", {
      drones: drones
    });
  });
});

router.get("/new", (req, res, next) => {
  res.render("drones/new");
});

router.post("/", (req, res, next) => {
  const droneInfo = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };

  const newDrone = new Drone(droneInfo);

  newDrone.save(err => {
    if (err) {
      return next(err);
    }
    // Redirect to the List of Products (/products) if it saves.
    return res.redirect("/drones");
  });
});

module.exports = router;
