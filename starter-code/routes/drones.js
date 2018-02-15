const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone');
const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2
  Drone.find((err, docs) => {
    if (err) {
      next();
      return;
    }
  res.render("drones/index", {docs:docs})
  });

});

router.get('/new', (req, res, next) => {
  // Iteration #3
  res.render("drones/new");
});

router.post('/', (req, res, next) => {
  // Iteration #3
  
    const newDrone = new Drone(
      {
      name: req.body.name,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed
      }
    )

    newDrone.save((err)=>{
    if (err) {
      next();
      return;
    } else{
      res.redirect("/drones")
    }
    });
});

module.exports = router;
