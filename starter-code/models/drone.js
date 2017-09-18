// drones schema  droneName, propellers and maxSpeed.
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const DroneSchema = new Schema({
  droneName : String,
  propellers: Number,
  maxSpeed: Number,

});

const Drones = mongoose.model('Drone', DroneSchema);
module.exports = Drone;
