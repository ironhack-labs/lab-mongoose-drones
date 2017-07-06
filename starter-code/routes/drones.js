const express = require('express');
const Drone = require("../models/drone");

const router = express.Router();


router.get('/', (req, res, next) => {
  Drone.find({}, (error, drones) =>{
    if (error){
      next(error);
      return;
    } else {
      res.render("drones/index", {drones});
    }
  });
});


router.get('/new', (req, res, next) => {
  res.render("drones/new")
});

router.post('/', (req, res, next) => {

  const droneInfo = {

    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed


  };

  const newDrone = new Drone(droneInfo);
  newDrone.save(error =>{
    if (error) {
      next(error);
      return; 
    } else {
      res.redirect("/drones");
    }
  })
  
});

module.exports = router;
