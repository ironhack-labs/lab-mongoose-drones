
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// require the Drone model here

const droneSchema = new Schema({
  droneName : String,
  propellers: Number,
  maxSpeed: Number
});

module.exports = mongoose.model('Drones', droneSchema);
