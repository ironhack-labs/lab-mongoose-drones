const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const droneSchema = new Schema({
  droneName: String,
  propellers: Number,
  maxSpeed: Number
});


const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;
