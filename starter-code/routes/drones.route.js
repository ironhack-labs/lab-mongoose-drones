const express = require('express');
const dronesController = require('../controllers/drones.controller');

// require the Drone model here

const router = express.Router();


router.get('/', dronesController.index);
router.get('/new', dronesController.new);
router.get('/:id/edit', dronesController.edit);
router.post('/:id/edit', dronesController.update);
router.post('/', dronesController.create);
router.get('/:id/delete', dronesController.delete);

module.exports = router;
