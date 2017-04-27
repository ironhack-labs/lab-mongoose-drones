const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dronesHaveaSchema = new Schema ({
  droneName:  { type: String, default: "Unknown Drone" },
  propellers: { type: Number },
  maxSpeed:   { type: Number },
  dronePrice: { type: Number },
  droneDesc:  { type: String },
  droneImg:   { type: String }
});

const Drone = mongoose.model('Drone', dronesHaveaSchema);

module.exports = Drone;
