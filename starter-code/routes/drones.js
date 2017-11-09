const express = require('express');
const Drone = require("../models/drone").Drone;

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if(err){
      console.log("Error: ", err);
      next();
    } else {
      const data = {
        drones: drones
      };
      res.render("drones/index", data);
    }
  })
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
