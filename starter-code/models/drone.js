t mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const DroneSchema = Schema({
  droneName: {type: String, required: [true, 'Please enter the drone\'s name']},
  propellers: { type: Number, default: 4 },
  maxSpeed: { type: Number, default: 8 }
});

const Drone = mongoose.model('Drone', DroneSchema);

module.exports = Drone;
