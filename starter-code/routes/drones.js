const express = require('express');

// require the Drone model here
const Drone = require("../models/drone");


const router = express.Router();


// Iteration #2
router.get("/", (req, res, next) => {
      console.log("------------");

  Drone.find({}, (err, drones) => {
    
    if (err) {
      return next(err);
    }

    res.render("./drones/index", {
      drones: drones
    });
  });
});




// Iteration #3
router.get('/new', (req, res, next) => {
  res.render("drones/new");
});




// Iteration #3
router.post("/", (req, res, next) => {
  const droneInfo = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };

  const newDrone = new Drone(droneInfo);

  newDrone.save(err => {
    if (err) {
      return next(err);
    }
    // redirect to the list of drones if it saves
    return res.redirect("/drones");
  });
});



module.exports = router;
