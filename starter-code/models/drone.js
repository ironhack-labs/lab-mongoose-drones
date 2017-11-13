const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const droneSchema = new Schema({
  // Drone name
  name: {type: String},

  // Number of propellers
  propellers: {type: Number},

  // Drone's maximum speed
  maxSpeed: {type: Number}
});

const DroneModel = mongoose.model("Drone", droneSchema);

module.exports = DroneModel;
