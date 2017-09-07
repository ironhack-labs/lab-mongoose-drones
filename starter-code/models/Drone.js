const mongoose = require('mongoose'),
	Schema = mongoose.Schema

const DroneSchema = new Schema({
	droneName: String,
	propellers: Number,
	maxSpeed: Number
})

module.exports = mongoose.model('Drone', DroneSchema)
