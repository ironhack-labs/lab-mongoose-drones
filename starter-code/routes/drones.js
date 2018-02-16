const express = require('express');
const Drone = require('../models/drone');

const router = express.Router();

router.get('/', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) throw next(err);
    res.render('drones/index', { drones });
  });
});

router.post('/', (req, res, next) => {
  const droneData = {
    name: req.body.name,
    propellers: req.body.propeller,
    maxSpeed: req.body.maxSpeed,
  };
  const newDrone = new Drone(droneData);
  newDrone.save(err => {
    next(err);
  });
  res.redirect('/drones');
});

router.get('/edit', (req, res) => res.render('drones/edit'));

router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  Drone.findById(id, (err, drone) => {
    if (err) throw next(err);
    res.render('drones/edit', { drone });
  });
});

router.post('/:id', (req, res, next) => {
  const id = req.params.id;

  Drone.findById(id, (err, drone) => {
    if (err) throw next(err);
    const updatedDroneData = {
      name: req.body.name,
      propellers: req.body.propeller,
      maxSpeed: req.body.maxSpeed,
    };
    Drone.findByIdAndUpdate(id, updatedDroneData, (err, drone) => {
      if (err) throw next(err);
      return res.redirect('/drones');
    });
  });
});

router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Drone.findByIdAndRemove(id, (err, drone) => {
    if (err) throw next(err);
    console.log(`${drone.name} has been deleted!`);
    res.redirect('/drones/');
  });
});
router.get('/new', (req, res, next) => {
  res.render('drones/new');
});

module.exports = router;
