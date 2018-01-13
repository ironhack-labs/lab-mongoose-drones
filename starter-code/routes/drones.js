const express = require('express');
const router = express.Router();
const dronesController = require('../controllers/drones.controller');

// require the Drone model here


router.get('/', dronesController.index);
router.get('/new', dronesController.new);
router.post('/', dronesController.create);

// router.post('/drones', (req, res, next) => {
//   // Iteration #3
// });

module.exports = router;
