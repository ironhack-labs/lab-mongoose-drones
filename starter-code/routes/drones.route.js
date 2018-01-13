const express = require('express');
const router = express.Router();
const dronesController = require('../controllers/drones.controllers');

router.get("/", dronesController.index );
router.get("/new", dronesController.new );

router.post("/", dronesController.create );

module.exports = router;