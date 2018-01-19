var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DroneSchema = new Schema({
  name:  String,
  propellers: Number,
  maxSpeed:   Number,
});

const Drone = mongoose.model('Drone', DroneSchema);

module.exports = Drone;