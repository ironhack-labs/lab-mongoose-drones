const mongoose = require('mongoose');


const Schema = mongoose.Schema;
/*
droneName - String (name of the drone model, like General Atomics MQ-9 Reaper)
propellers - Number (amount of propellers, like 4)
maxSpeed - Number (meters per second for the drone's maximum speed, like 18)
*/

const DroneSchema = new Schema({
  droneName: String,
  propellers: Number,
  maxSpeed: Number,
})

const Drone = mongoose.model('Drone', DroneSchema);

module.exports = Drone;
