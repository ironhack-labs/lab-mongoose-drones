const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const productSchema = new Schema({
const droneSchema = new Schema({
  droneName: String, // String (name of the drone model, like General Atomics MQ-9 Reaper)
  maxSpeed: Number, // - Number (amount of propellers, like 4)
  propellers: Number// - Number (meters per second for the drone's maximum speed, like 18)
});

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;
