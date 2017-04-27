const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const droneSchema = new Schema({
  droneName: {type: String},
  propellers: {type: Number},
  maxSpeed: {type: Number},
  imageUrl: {image:String, default: 0}
});

/////////////////////    name of the model , Schema how to define the model
////////////////////////       |     ,       |
const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;
