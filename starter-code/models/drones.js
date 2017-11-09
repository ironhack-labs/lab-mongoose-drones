const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const DronesSchema = new Schema({
  droneName : String,
  propellers : Number,
  maxSpedd   : Number,
});

const Drone = mongoose.model('Drone', DronesSchema);
module.exports = Drone;
