const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DroneSchema = new Schema({
    name        : String,
    propellers  : Number,
    maxSpeeds   : Number
});

const Drone = mongoose.model('drones',DroneSchema);

module.exports = Drone;
