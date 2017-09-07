const mongosse = require('mongoose');
const Schema = mongoose.Schema;

const DroneSchema = new Drone ({
  droneName: String,
  propellers: Number,
  maxSpeed: Number
})


model.exports = mongoose.model('Drone',DroneSchema);
