const express = require('express');
const Drone=require('../models/drone');
// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({},(err,data)=>{
    if(err){
      return next(err);
    }
    res.render('drones/index',{result : data});
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
