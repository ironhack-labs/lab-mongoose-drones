const express = require('express');
const router = express.Router();
const dronesController = require('../controllers/drones.controller');

// require the Drone model here

// router.get('/', (req, res, next) => {
//   console.log('holi')
//   // Iteration #2
// });

router.get('/', dronesController.index);

//router.get('/drones/new', (req, res, next) => {
  // Iteration #3
//});

router.get('/new', dronesController.new);
router.post('/', dronesController.create);

//router.post('/drones', (req, res, next) => {
  // Iteration #3
//});

router.get('/:id/edit', dronesController.edit);
router.post('/:id', dronesController.update);

module.exports = router;
