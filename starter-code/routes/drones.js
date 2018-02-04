const express = require('express');
const Drone = require('../models/drone');

// require the Drone model here

const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2  
  Drone.find({}, (err, drones)=>{
    if(err){
      console.log('Error fetching from DB');
      return next(err);
    } else {
      console.log(drones.length);
      const data = {
        drones : drones
      };
      res.render('drones/index', data);
    }
  });
});


// router.get('/drones/new', (req, res, next) => {
//   // Iteration #3
// });

// router.post('/drones', (req, res, next) => {
//   // Iteration #3
// });

module.exports = router;
