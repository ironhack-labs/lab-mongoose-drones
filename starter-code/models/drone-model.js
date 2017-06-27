const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myDroneSchema = new Schema({
  droneName : String,
  propellers: Number,
  maxSpeed: Number,

});

const Drone = mongoose.model('Drone', myDroneSchema);

module.exports = Drone;
