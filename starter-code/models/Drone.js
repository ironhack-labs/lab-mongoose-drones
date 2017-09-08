const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const Drone = new Schema({
droneName: String,
propellers: Number,
maxSpeed: Number,
});


module.exports = mongoose.model('Drone', Drone);
