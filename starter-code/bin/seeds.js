// Iteration #1

const mongoose = require('mongoose');
const Drone = require('../models/Drone')
const {dbURL} = require('../config/db.js')

mongoose.connect(dbURL, {useMongoClient: true})

const droneData = [
  { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.create(droneData, (err, docs) => {
	if (err) {
		throw err
	}
	docs.forEach(d => d.droneName)
	mongoose.connection.close()
})
