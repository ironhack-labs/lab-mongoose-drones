const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// More info here -> http://mongoosejs.com/docs/schematypes.html
const droneSchema = new Schema({
    droneName: String,
    propellers: Number,
    maxSpeed: Number,
});

const Drone = mongoose.model("Drone", droneSchema);

module.exports = {
    Drone: Drone,
};