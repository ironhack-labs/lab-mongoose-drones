const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myDroneSchema = new Schema({
  droneName: {type: String},
  propellers: {type: Number},
  maxSpeed: {type: Number}
});


const Drone = mongoose.model('Drone', myDroneSchema); //collection



module.exports = Drone;
