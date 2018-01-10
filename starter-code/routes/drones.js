const express = require('express');
// require the Drone model here
const mongoose = require("mongoose");
//import model
require("../models/Drone");
const Drone = mongoose.model("Drone");
const router = express.Router();



router.get('/', (req, res, next) => {
  Drone.find({},(err, drones)=>{
    if(err) {
      next();
      return;
    }
    res.render("drones", {drones:drones});

  });
});


router.get('/new', (req, res, next) => {
  res.render("drones/new",{})
});

router.post('/', (req, res, next) => {
  var data = {
    name:req.body.name,
    propellers:req.body.propellers,
    maxSpeed:req.body.maxSpeed
  };
  var drone = new Drone(data);
  drone.save((err, r)=>{
    if(err) next();
    else res.redirect("/drones");
  });
  
});

module.exports = router;
