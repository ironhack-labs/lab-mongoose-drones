const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DroneSchema = new Schema({
  droneName: String,
  propellers: Number,
  maxSpeed: Number,
});

//const Drone = mongoose.model('Drone', ProductDrone);
//module.exports = Product;

module.exports = mongoose.model('Drone', DroneSchema);
