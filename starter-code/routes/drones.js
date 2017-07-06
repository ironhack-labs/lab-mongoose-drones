const express = require('express');
const Drone = require('../models/drone');
// require the Drone model here



const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
    Drone.find({}, (err, d) => {
      if(err){
  return next;
}
      else{
console.log(d);
        res.render('drones/index', {
        drones: d

      });
    }
    });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render("drones/new");

});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  console.log(req.body);
let d = new Drone({
  droneName: req.body.droneName,
  propellers: req.body.propellers,
  maxSpeed: req.body.maxSpeed
});
d.save((err, obj) => {
  res.redirect('/drones');
});
});

module.exports = router;
