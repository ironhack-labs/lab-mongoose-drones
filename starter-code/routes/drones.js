const express = require('express');

// require the Drone model here
const Drone = require("../models/Drone.js");
const router = express.Router();

  // Iteration #2
router.get('/', (req, res, next) => {
  Drone.find({},(err,result)=> {
    console.log(result);
    res.render("drones/index", {result})
   
  })
  //next();
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
