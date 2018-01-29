const express = require('express');

// require the Drone model here
const Drone = require('../models/drone'); //load model drone

const router = express.Router();


router.get('/drones', (req, res, next) => {

  // Iteration #2 
  Drone.find({}, (err, drones) => {
    if (err) {
      //Call middleware in app.js which managing errors. 
      next(err);
    } else {
      console.log(drones);
      //necesito enviarlo a la vista
      res.render('drones/index', {
        drones
      });
    }
  });
  //res.render('product', { title: 'Express' });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
