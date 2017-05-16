const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const droneSchema = new Schema({
  droneName: {type: String},
  propellers: {type: Number},
  maxSpeed: {type: Number},
});

/////////////////////    name of the model , Schema how to define the model
////////////////////////       |     ,       |
const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;
