const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DronSchema = new Schema({
  droneName : String,
  propellers : Number,
  maxSpeed : Number,
})

const Drone = mongoose.model('Drone', DronSchema);
module.exports = Drone;
