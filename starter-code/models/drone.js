const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const dronSchema = new Schema({
  droneName : String,
  propeller : Number,
  maxSpeed: Number,
});

const Dron = mongoose.model('Dron', dronSchema);
module.exports = Dron;
