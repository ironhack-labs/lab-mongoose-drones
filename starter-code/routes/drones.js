const express = require('express');

// require the Drone model here
const Drone = require("../models/Drone.js");

const router = express.Router();


router.get('/', (req, res, next) => {
  // Iteration #2
  console.log("hola");
  Drone.find({},(err,result)=>{
    console.log(result);
    if(err) return next;
    res.render("drones/index", {dronesArray:result});
  });
  
})

router.get('/new', (req, res, next) => {
  // Iteration #3
  res.render("drones/new");
})
.post('/new', (req, res, next) => {
  // Iteration #3
  if(err) return next;
    const drone = new Drone({
        name:req.body.name,
        propellers:req.body.propellers,
        maxSpeed:req.body.maxSpeed,
    });
    drone.save();
    res.render("drones/new");
});



module.exports = router;
