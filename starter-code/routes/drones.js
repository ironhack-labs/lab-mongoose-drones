const express = require('express');
const Drone = require("../models/drone");

const router = express.Router();


router.get('/', (req, res, next) => {
  Drone.find({}, (error, drones) =>{
    if (error){
      next(error);
      return;
    } else {
      res.render("drones/index", {drones});
    }
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
