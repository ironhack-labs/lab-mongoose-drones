const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Drone = new Schema({
  droneName : String,
  propellers : Number,
  maxSpeed : Number
});

const NewDrone = mongoose.model('NewDrone', Drone);
module.exports = NewDrone;
