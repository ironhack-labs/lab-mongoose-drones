const express = require('express');
const Drone = require("../models/Drone.js")
// require the Drone model here

const router = express.Router();


router.get('/', (req, res, next) => {
  console.log("AF!!!")
  Drone.find({}, (err, result) => {
    console.log("esto es lo que recibo de mi servidor")
    console.log(result)
    res.render("drones/index", {Drones:result})
  }).catch ( (err)=>{
    next();
    console.log(err);
  })
});


router.get('/new', (req, res, next) => {
  res.render("drones/new")
  next();
  // Iteration #3
});

router.post('/', (req, res, next) => {
  const addDrone = new Drone ({
    name:req.body.name,
    propellers:req.body.propellers,
    maxSpeed:req.body.maxSpeed
  })
  addDrone.save();
  res.send(`<h2>Agregado!!</h2> <br /> <a href="/drones/">Ve tu Drone en la lista</a>`)

  // Iteration #3
});

module.exports = router;
