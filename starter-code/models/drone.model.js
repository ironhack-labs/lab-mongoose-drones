const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const DroneSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: { type: Number, min: 0, max: 18 }
});

const Drone = mongoose.model('Drone', DroneSchema);

module.exports = Drone;
