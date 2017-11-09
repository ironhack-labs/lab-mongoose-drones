const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const droneSchema = new Schema({
  droneName: String,
  propellers: Number,
  maxSpeed: Number
});

const Drone = mongoose.model("drone", droneSchema);

module.exports = {
  Drone: Drone
};