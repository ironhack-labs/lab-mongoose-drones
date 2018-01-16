const express = require('express');
const router = express.Router();
const dronesController = require('../controllers/drone.controller');

router.get('/', dronesController.index);

/*router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});
*/

module.exports = router;
