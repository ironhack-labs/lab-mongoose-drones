import { EDESTADDRREQ } from 'constants';

const express = require('express');

// require the Drone model here
const Drone = require("../models/Drone.js");
const router = express.Router();

  // Iteration #2
router.get('/', (req, res, next) => {
  Drone.find({},(err,result)=> {
    console.log(result);
    res.render("drones/index", {result})
   
  })
  //next();
});

 // Iteration #3
 router.get('/new', (req, res, next) => {
 res.render("new");
});


router.post('/new', (req, res, next) => {
  const addDrone = new Drone(
    { name:req.body.name,
      propellers:req.body.propellers,
      maxSpeed:req.body.maxSpeed
    })
   addDrone.save();
   res.send("Drone Added");
});


module.exports = router;
