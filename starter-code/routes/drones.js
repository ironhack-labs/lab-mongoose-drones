const express = require('express');

// require the Drone model here
const Drone = require('../models/drone-model.js');

const droneRouter = express.Router();


droneRouter.get('/drones', (req, res, next) => {
  // Iteration #2: call back
  Drone.find((err, droneList) => {
    if (err){
      next(err);
      return;
    }

    res.render('drones/drone-list-view.ejs',{
      drones: droneList
    });
  });
});


droneRouter.get('/drones/new', (req, res, next) => {
  // Iteration #3
   res.render('drones/new-drone-view.ejs');

});

droneRouter.post('/drones', (req, res, next) => {
  // Iteration #3
const theDrone = new Drone({
droneName: req.body.droneName,
propellers: req.body.propellers,
maxSpeed: req.body.maxSpeed
});

theDrone.save((err) => {
if (err) {
next(err);
return;
}

res.redirect('/drones');
//takes you to a new page. Redirect prevents you from duplicating
//in the network tab in Chrome if it says 302 it's a get
});
});


module.exports = droneRouter;
