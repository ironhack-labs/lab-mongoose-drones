const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const DronSchema = new Schema({
  droneName  : String,
  propellers : Number,
  maxSpeed   : Number,
});

const Dron = mongoose.model('Dron', DronSchema);
module.exports = Dron;
