const express = require('express');

const DroneModel = require('../models/drone');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  DroneModel.find().exec()
  .then( (droneResults) => {
      res.locals.listOfDrones = droneResults;
      res.render("drones/index");
  })
  .catch( (err) => {
    next(err);
  });
});


router.get('/drones/new', (req, res, next) => {
  res.render("drones/new");
});

router.post('/drones', (req, res, next) => {
  const theDrone = new DroneModel({
      name: req.body.droneName,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed,
  });

  theDrone.save()
    .then( () => {
        res.redirect("/drones");
    })
    .catch( (err) => {
        next(err);
  });
});

module.exports = router;
