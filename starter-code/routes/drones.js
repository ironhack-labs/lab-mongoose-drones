const express = require('express');

// require the Drone model here
const Drone = require('../models/drones');
const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2

  Drone.find({},(err,drones)=> {
    if(err){return next(err)}

    res.render("drones/index",{
      drones: drones
    });

  })

});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new');
});



router.post('/drones', (req, res, next) => {
  // Iteration #3
  const formValue = {
    droneName: req.body.inputName,
    propellers: req.body.inputPropeller,
    maxSpeed: req.body.inputSpeed
  };

  const newDrone = new Drone(formValue);

  newDrone.save((err)=>{
    if(err){return next(err)}

    return res.redirect("/drones");

  });

});



module.exports = router;
