const express = require('express');
const router = express.Router();

// require the Drone model here
const droneController = require('../controllers/drones.controller')

router.get('/drones', droneController.show);

router.get('/drones/new', droneController.new);
router.post('/drones', droneController.create);

module.exports = router;