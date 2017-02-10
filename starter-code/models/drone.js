/*jshint esversion:6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DroneSchema = new Schema({
  droneName: {
    type: String,
    required: true
  },
  propellers: {
    type: Number,
    required: true
  },
  maxSpeed: {
    type: String,
    required: true
  },


});
const Drone = mongoose.model('Drone', DroneSchema);

module.exports = Drone;
