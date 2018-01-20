const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const droneSchema = new Schema({
  droneName: {type: String},
  propellers: {type: Number},
  maxSpeed: {type: Number}
});

// Model
// constructor function that alows us to interact with a single collection
const Drone= mongoose.model('Drone', droneSchema);


// If YOU FORGET THIS - GAME OVER  😵
module.exports = Drone;
