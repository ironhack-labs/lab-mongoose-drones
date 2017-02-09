/* jshint esversion: 6 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const droneSchema = new Schema({
  droneName     : String,
  propellers    : Number,
  maxSpeed      : Number
});

const Drone = mongoose.model('drones', droneSchema);

module.exports = Drone;
