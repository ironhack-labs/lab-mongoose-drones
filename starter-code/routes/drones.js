const express = require('express');
const router = express.Router();
const Drone = require('../models/drone');


router.get('/', function(req, res, next) {
  Drone.find({}, (err,drones) => {
    if(err) {
      next(err);  // we send this err to the next middleware (wherever it is in the app.js)
    } else {
      res.render('drones/index',{drones});  // he knows he was to go to views to look for the file index inside the products folder (as specified in the route)
    }
  });
});


router.get('/new', (req,res,next) => {
  res.render('drones/new');   // will go to views
});

router.post('/',(req,res,next)=>{
  const droneInfo = {
    droneName: req.body.droneName,   // already has a parser in express and the info comes from new.ejs in views/products
    propellers:req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };

  const newDrone = new Drone (droneInfo); // instance of my Product
  newDrone.save ((err) => {
    if(err){
      next(err);
    } else {
      res.redirect('/drones'); // once the previous steps are done we redirect to ask for new instances
    }
  })
});

module.exports = router;
