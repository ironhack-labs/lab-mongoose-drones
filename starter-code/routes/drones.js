const express = require('express');

// require the Drone model here

const router = express.Router();
const Drone = require("../models/drone")

// CRUD -> READ DRONES
router.get('/', (req, res) => {
  Drone.find().exec((err,drones) => {
    res.render("drones/index" , {
      drones:drones
    })
  })
});


router.get('/new', (req, res) => {
  res.render("drones/new");
});

router.post('/new', (req, res, next) => {
  const {name,propellers,maxSpeed} = req.body;
  const drone = new Drone({name,propellers,maxSpeed});
  drone.save(err => {
    if(err){return next(err)}
    res.redirect("/");
  })
});

module.exports = router;
