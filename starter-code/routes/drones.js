const express = require('express');
const router = express.Router();
const Drone = require('../models/drone.js')


router.get('/drones', (req, res, next) => {
  // Iteration #2 
  Drone.find({}, (err, drones) => {
   // console.log(drones);
    res.render('drones/index', {
       drones: drones
    });
  });
});


router.get('/drones/new', (req, res, next) => {
  res.render("drones/new");
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const makeDrone = {
                      droneName: req.body.droneName, 
                      propellers: req.body.propellers,
                      maxSpeed: req.body.maxSpeed
                    };
   const newmakeDrone = new Drone(makeDrone);
newmakedrone.save((err) =>{
 if (err) {return next(err)}
 return res.redirect('/drones/new');
});
});

module.exports = router;
