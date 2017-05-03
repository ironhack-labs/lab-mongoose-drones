const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DroneSchema = Schema({
  droneName : { type: String },
  propellers: { type: Number },
  maxSpeed  : { type: Number }
});

// Model
const Drone = mongoose.model('Drone', DroneSchema);

module.exports = Drone;