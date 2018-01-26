const express = require('express');
const dronesController = require('../controllers/drones.controller');

// require the Drone model here

const router = express.Router();


router.get('/', dronesController.index);
router.get('/new', dronesController.new);
router.post('/', dronesController.create);

module.exports = router;
