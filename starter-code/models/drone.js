const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const droneSchema = new Schema ({
  droneName: String,
  propellers: Number,
  maxSpeed: Number,
});

const Drone = mongoose.model('Drone',droneSchema);  // convention.. capital letters for models

module.exports = Drone;  //in order to use (call) it in other files (const ### = require(./product.js))
