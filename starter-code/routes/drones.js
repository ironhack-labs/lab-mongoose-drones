const express = require('express');
const Drone = require('../models/drone');
// require the Drone model here

const router = express.Router();


router.get('/', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) { return next(err) }

    res.render('drones/index', {
      drones: drones
    });
  });
});


router.get('/new', (req, res, next) => {
    res.render("drones/new")
});

router.post('/', (req, res, next) => {
    if(req.body.name !== "" && req.body.propellers > 0 && req.body.maxSpeed > 0 ){   
  var droneInfo = {
        name: req.body.name,
        propellers: req.body.propellers,
        maxSpeed: req.body.maxSpeed
      }
    
    var newDrone = new Drone(droneInfo)
    newDrone.save( (err) => {
      if (err) { return next(err) }
      // redirect to the list of products if it saves
      return res.redirect('/drones');
    });
  }
  else{
    
    return res.redirect('/drones/new')
  }

});

module.exports = router;
