const mongoose = require('mongoose');
//uppercase convection
const Schema = mongoose.Schema;

//const Review = require('./review'); // utilizo el esquema de review.

const droneSchema = new Schema({
  droneName: String,
  propellers: Number,
  maxSpeed: Number,
});

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;
