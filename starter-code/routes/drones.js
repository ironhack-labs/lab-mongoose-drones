const express = require('express');
const router = express.Router();
const app = express();

// require the Drone model here
const dronesModel = require('../models/drone.js');
app.use('/', dronesModel);



router.get('/drones', (req, res, next) => {
  // Iteration #2
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
