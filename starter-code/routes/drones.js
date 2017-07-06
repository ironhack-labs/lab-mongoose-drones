const express = require('express');
const Drone = require('../models/drone');
// require the Drone model here



const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
    Drone.find({}, (err, d) => {
      if(err){
  return next;
}
      else{
console.log(d);
        res.render('drones/index', {
        drones: d

      });
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
