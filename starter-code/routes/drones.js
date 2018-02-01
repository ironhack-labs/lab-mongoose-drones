const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone');


router.get('/', (req, res, next) => {
  Drone.find().exec((err, drones)=>{
    res.render('drones/index',{
      drones : drones,
    })
    if(err){return next(err);}
  })
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
