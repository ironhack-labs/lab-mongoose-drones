const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const droneSchema = new Schema( {
  droneName: {type: String },
  propellers: {type:Number, default: 0 },
  maxSpeed: { type: Number },
  imageUrl: { type: String, default: 'public/images/box.gif' }
});

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;
