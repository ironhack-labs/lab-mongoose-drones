const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const droneSchema = new Schema({
  droneName: { type: String },
  propellers: { type: Number },
  maxSpeed: { type: Number }
});

const DroneModel = mongoose.model("Drone", droneSchema);

module.exports = DroneModel;
