/*jshint esversion:6*/
const express = require('express');

// require the Drone model here

const router = express.Router();

const Drones = require('../models/drone');

router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drones.find({},function (err,drones){
    if(err) return next(err);
    res.render('drones/index',{drones});
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #4
  res.render("drones/new");
});

router.post('/drones', (req, res, next) => {
  // Iteration #4
  const body = req.body;
  const droneInstance =new Drones(body);
  droneInstance.save(function (err, doc) {
    if (err) return next(err);
    res.redirect('/drones');
});

});


router.get('/drones/:id', (req, res, next) => {
  // Iteration #3
  const id = req.params.id;
  Drones.findById(id, function (err, drone) {
  if (err) return next(err);
  res.render('drones/show', {drone});
    }
  );
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #6 (Bonus)
  const id = req.params.id;
  Drones.findById(id, function (err, drone) {
  if (err) return next(err);
  res.render('drones/edit', {drone});
    }
  );
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #6 (Bonus)
  const id = req.params.id;
  const body= req.body;

  Drones.findByIdAndUpdate(id,body, function (err) {
  if (err) return next(err);
  res.redirect('/drones');
    }
  );
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5 (Bonus)
    const id = req.params.id;
    Drones.findByIdAndRemove(id,function (err) {
    if (err) return next(err);
    res.redirect('/drones');
  });
});


module.exports = router;
