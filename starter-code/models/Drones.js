const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DroneSchema = new Schema({
  droneName: String,
  properllers: Number,
  maxSpeed: Number,
});

module.exports = mongoose.model('Drone', DroneSchema);
