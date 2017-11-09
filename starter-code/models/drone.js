const moongose = require('mongoose');
const Schema = moongose.Schema;

const DroneSchema = new Schema({
  droneName: String,
  propellers: Number,
  maxSpeed :String
});

const Drone = moongose.model('Drone', DroneSchema);
module.exports = Drone;
