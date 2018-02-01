const express = require('express');

// require the Drone model here

const router = express.Router();
const Drone = require("../models/drone")

// CRUD -> READ DRONES
router.get('/', (req, res) => {
  Drone.find().exec((err,drones) => {
    res.render("drones/index" , {
      drones:drones
    })
  })
  // Iteration #2
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
