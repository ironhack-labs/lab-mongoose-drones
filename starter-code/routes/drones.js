const express = require('express');
const Drone = require("../models/drone");

// require the Drone model here

const router = express.Router();


router.get('/', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) {return next(err) }
    
    res.render("drones/index", {
        drones: drones
            }); 
        });
});


router.get('/new', (req, res, next) => {
  // Iteration #3
  res.render("drones/new");
});

router.post('/', (req, res, next) => {
  // Iteration #3
  const droneInfo = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
}


 // Create a new Product with the Params passed
 // in fromthe "/products/new" form
const newDrone = new Drone(droneInfo);

newDrone.save( (err) => {
    if (err) { return next(err) }
// Redirect to the list of Products (/products)
// if it saves
    return res.redirect("/");
});

// Take the params and translate them into a new object
});



module.exports = router;
