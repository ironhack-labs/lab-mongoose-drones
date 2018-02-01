const express = require("express");
const droneModel = require("../models/drone");
// require the Drone model here

const router = express.Router();

router.get("/", (req, res, next) => {
  droneModel.find({}, (err, drones) => {
    if (err) {
      return next(err);
    }
    res.render("drones/index", { drones: drones });
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

  const newDrone = new droneModel(droneInfo);

  newDrone.save(err => {
    if (err) {
      return next(err);
    }
    return res.redirect("/drones");
  });
});

module.exports = router;
