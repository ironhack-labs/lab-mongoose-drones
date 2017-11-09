// More info here how to define a Schema -> http://mongoosejs.com/docs/guide.html
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// More info here -> http://mongoosejs.com/docs/schematypes.html
const droneSchema = new Schema({
  droneName: String,
  propellers: Number,
  maxSpeed: Number
});

const Drone = mongoose.model("Drone", droneSchema);

module.exports = {
  Drone: Drone
};
