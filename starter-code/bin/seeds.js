// Iteration #1

const mongoose = require('mongoose');
const Drone = require('../models/Drone')
const {dbURL} = require('../config/db.js')

mongoose.connect(dbURL, {useMongoClient: true})

const drones = [
	{
		droneName: 'Drone 1',
		propellers: '10',
		maxSpeed: '100'
	},
	{
		droneName: 'Drone 2',
		propellers: '10',
		maxSpeed: '100'
	},
	{
		droneName: 'Drone 3',
		propellers: '10',
		maxSpeed: '100'
	}
]

Drone.create(drones, (err, docs) => {
	if (err) {
		throw err
	}
	docs.forEach(d => d.droneName)
	mongoose.connection.close()
})
