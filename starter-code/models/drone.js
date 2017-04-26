const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const droneSchema = new Schema({
  droneName: { type: String },
  propellers: { type: Number, default: 3},
  maxSpeed:{ type: Number, default: 0},
  description:{ type: String },
  imageUrl: { type: String },

});

const Drone = mongoose.model('Drone', droneSchema);


module.exports = Drone;