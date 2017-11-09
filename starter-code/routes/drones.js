const express = require('express');

const Dron = require('../models/drone');

const router = express.Router();

// (app.js) drones --> /drones/ (drones.js) ==> /
router.get('/', (req, res, next) => {
  // Iteration #2
  Dron.find({}, (err, listOfDrones) => {
    if (err) { return next(err); }
    res.render('drones/index', {
      drones: listOfDrones
    });
  });
});


router.get('/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new');
});
// EL DE ARRIBA LE MANDA EL CURRO AL DE ABAJO - ARRIBA PINTA ABAJO CURRA
router.post('/', (req, res, next) => {
  // Iteration #3
  var dronInfo = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };
  const newDron = new Dron(dronInfo);
  newDron.save( (err) => {
    if (err) { return next(err); }
    // redirect to the list of products if it saves
    return res.redirect('/drones');
  });

});

module.exports = router;
