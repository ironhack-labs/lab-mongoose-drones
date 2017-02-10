/*jshint esversion:6*/

const express = require('express');
// require the Drone model here

const Drone = require('../models/drone');

/* GET products listing. */

const router = express.Router();


router.get('/drones', (req, res, next) => {

  Drone.find({}, function(err, drones) {
    console.log(drones)
    if (err) {return next(err);}
    res.render('drones/drones', {drones});
  });
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new', {
    title: 'Add a new product'
  });
});



router.post('/drones', (req, res, next) => {
  // Iteration #4
});

router.post('/drones/new', (req, res, next) => {
  const body = req.body
  const drone = new Drone()
  console.log(body);

/*  drone.save(function (err, doc) {
    if (err) return next(err)
    res.redirect('/drones')*/

})


router.get('/drones/:id', (req, res, next) => {
  const id = req.params.id;
  Drone.findOne({_id: id}, function (err, drone) {
    if (err) return next(err);
    res.render('drones/show',{drone:drone});
  });
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #6 (Bonus)
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #6 (Bonus)
});


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5 (Bonus)
});


module.exports = router;
