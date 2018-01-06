const express = require('express');

// require the Drone model here

const Drones = require("../models/drone");

const router = express.Router();


// router.get('/', function(req, res, next) {
//   Drones.find({}, (err, results) => {
//     if (err){
//       console.log("ERROR", err);
//       next(err);
//       return;
//     }
//     else {
//       res.render('drones/index', {title: "yes", results});
//     }
//   })
// });

router.get('/', function(req, res, next) {
  Drones.find({})
  .then(results => {
    res.render('drones/index', {title: "yes", results});
  })
  .catch(err => {
    next(err);
    return;
  })
});  
  


router.get('/new', (req, res, next) => {
    res.render("drones/new");
});

router.post('/', (req, res, next) => {
  let name = req.body.name;
  let propellers = req.body.propellers;
  let maxSpeed = req.body.maxSpeed;
  Drones.create({name, propellers, maxSpeed})
  .then(response => {
    res.redirect('/drones');
  })
  .catch(err => {
    find(err);
    return;
  })
});

module.exports = router;
