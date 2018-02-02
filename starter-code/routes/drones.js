const express = require('express');
const Drone = require('../models/drone');

const router = express.Router();


router.get('/', (req, res, next) => {
	Drone.find({}, (err, drones) => {
		if (err) { return next(err) }

		res.render('drones/index', {
			drones: drones
		});
	});
});

router.post('/', (req, res, next) => {
	const droneInfo = {
		name: req.body.name,
		propellers: req.body.propellers,
		maxSpeed: req.body.maxSpeed
	};
	
	const newDrone = new Drone(droneInfo);
	newDrone.save((err) => {
		if (err) { return next(err) }
		return res.redirect('/drones');
	});
});


router.get('/new', (req, res, next) => {
	res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
