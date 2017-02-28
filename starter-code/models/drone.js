const mongoose = require('mongoose'); //require mongoose to use this App

const Schema = mongoose.Schema; // Schema Constructor Object

const droneSchema = new Schema({
  droneName: String,
  propellers: Number,
  maxSpeed: Number
});

// Schema gives us the power to require certain fields
//with certain data types
const Drone = mongoose.model('drone', droneSchema);

module.exports = Drone;  // Every time drone.js is used, they get the Drone
