const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const DroneSchema = new Schema({
  droneName: String,
  propellers: Number,
  maxSpeed: Number,
  image: String
});

module.exports = mongoose.model('Drone', DroneSchema);
