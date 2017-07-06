const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//Hemos creado un esquema de drone!

const DroneSchema = new Schema({
  droneName: String,
  propellers: Number,
  maxSpeed: Number
});

const Drone = mongoose.model('Drone', DroneSchema);
module.exports = Drone;
