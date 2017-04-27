const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dronesSchema = new Schema({
  droneName: { type: String, },
  propellers: { type: Number, default: 4 },
  maxSpeed: { type: Number, default: 18 }
});

const Drone = mongoose.model('Drone', dronesSchema);

module.exports = Drone;
