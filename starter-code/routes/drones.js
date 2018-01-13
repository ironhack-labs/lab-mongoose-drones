const express = require('express');
const router = express.Router();
const dronesController = require('../controllers/drones.controller');

// require the Drone model here


router.get('/', dronesController.index);


// router.get('/drones', (req, res, next) => {
//   // Iteration #2
// });


// router.get('/drones/new', (req, res, next) => {
//   // Iteration #3
// });

// router.post('/drones', (req, res, next) => {
//   // Iteration #3
// });

module.exports = router;
