const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const droneSchema = new Schema({
  droneName       : String,
  propellers      : Number,
  maxSpeed   : Number,
});

const drone = mongoose.model('drone', droneSchema);
module.exports = drone;
