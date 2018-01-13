const express = require('express');
const router = express.Router();
const dronesController = require('../controllers/drones.controller');

// require the Drone model here


router.get('/', dronesController.index);
router.get('/new', dronesController.new);
router.post('/', dronesController.create);
router.get('/:id/edit', dronesController.edit);
router.post('/:id', dronesController.update);
router.post('/:id/delete', dronesController.delete);

module.exports = router;
