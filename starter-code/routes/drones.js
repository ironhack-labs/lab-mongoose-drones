const express = require('express');
const DroneModel = require('../models/drone-model.js');
const router = express.Router();


router.get('/drones', (req, res, next) => {
  console.log("WERE IN THE ROUTE");
  DroneModel.find(
    (err, droneResults) => {
      console.log("WERE IN THE FIND");
    if (err) {
      //use next() to skip to the ERROR page
      next(err);
      return;
    }
    console.log(droneResults);

    // display drone-list-view.ejs
    // the render methods knows to automatically look inside
    // the views folder
    res.render('drones/index.ejs', {
      dronesObject: droneResults
      // transfer of information to the view
    });
  });
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new.ejs');
});

router.post('/drones', (req, res, next) => {
  const theDrone = new DroneModel ({
    droneName: req.body.droneName,
    propellers: req.body.dronePropellers,
    maxSpeed: req.body.droneMaxSpeed
  });

  theDrone.save((err) => {
    if (err) {
      next(err);
      return;
    }
    //if save is successful, redirect to a URL
    res.redirect('/drones');
    //if we don't redirect we can refresh and duplicate the data
  });
});

module.exports = router;
