const express = require('express');
const Drone = require('../models/drone.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  Drone.find({}, (err, docs) => {
    if(err) {
      next();
    }
    else {
      res.render('drones/index', {drones:docs});
    }
  });
});



router.get('/new', (req, res, next) => {
  res.render('drones/new');
});

router.post('/', (req, res, next) => {
  var newDroneName = req.body.droneName;
  var newPropellers = req.body.propellers;
  var newMaxSpeed = req.body.maxSpeed;

  _addToDBS(newDroneName, newPropellers, newMaxSpeed);
  res.redirect('/drones');
});

function _addToDBS(name, prop, speed){
  var newDrone = new Drone({droneName: name, propellers: prop, maxSpeed: speed});
  newDrone.save((err, doc) => {
    if(err){
      throw err;
    }
    else{
      console.log(`${doc} is saved!`);
    }
  });
}

module.exports = router;
