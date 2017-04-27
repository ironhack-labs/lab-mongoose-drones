/*jshint esversion: 6 */
const express = require('express');
const Drone = require('../models/drone.js');


// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    res.render('drones/index', {drones:drones});
  });
});

router.get('/drones/new', (req, res, next) => {
  let data = {
    name: "test"
  };
  res.render("drones/new", data);
});

router.get('/drones/:id/delete', (req, res, next) =>{
  //elim
  Drone.findByIdAndRemove(req.params.id, function (err,offer){
    if(err) { throw err; }
    console.log(offer);
    // ...
  });
  res.redirect('/drones');
});

router.post('/drones', (req, res, next) => {
  const drone = new Drone({
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  });
  drone.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(drone);
    }
  });
  res.redirect('/drones');
});

router.get ('/drones/:id', (req, res, next) =>{
  Drone.findById(req.params.id, (err, dron) =>{
    if(err) {console.log(err);}
    else{
      res.render ('drones/dron', dron);
    }
  });
});

router.post('/drones/:id/edit', (req, res, next)=>{
  let updated_dron = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };
  Drone.findByIdAndUpdate(req.params.id, { $set: updated_dron}, (err) => {
    res.redirect('/drones');
  });
});


module.exports = router;
