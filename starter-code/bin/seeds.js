const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/drones-dev', { useMongoClient: true });
const Drone = require('../models/drone');

const drones = [
	{
		name: 'Drone 1',
		propellers: 4,
		maxSpeed: 20
	},
	{
		name: 'Drone 2',
		propellers: 2,
		maxSpeed: 15
	},
	{
		name: 'Drone 3',
		propellers: 5,
		maxSpeed: 50
	}
];

Drone.create(drones, (err, docs) => {
	if (err) {
		console.error(err.message);
		throw err;
	}

	docs.forEach((drone) => {
		console.log(drone.name);
	});
	mongoose.connection.close();
});
