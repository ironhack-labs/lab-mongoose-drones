const express = require('express');

// require the Drone model here

const Drone = require('../models/drone')
const router = express.Router();

router.get('/', (req, res, next) => {
  // Hacer búsqueda a bDD
  console.log("Welcome to drones");
  Drone.find({}).then((drones) => {
    res.render('drones/index', {
      drones: drones
    });
  });
  // Recibir la informació que queremos pintar

  // Renderizar la página, enviándole la info
});


router.get('/new', (req, res, next) => {
  // Iteration #3
});

router.post('/', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
