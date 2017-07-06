const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DroneSchema = new Schema({
  droneName: String,
  propellers: {type: Number, max: 4},
  maxSpeed: {type: Number, max: 18},
});

const Drone = mongoose.model('Drone', DroneSchema);
module.exports = Drone;
