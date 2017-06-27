const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myDroneSchema = new Schema ({
  droneName: {type:String},
  propellers: {type:Number, default:4},
  maxSpeed: {type:Number}
});

const DroneModel = mongoose.model ('Drone', myDroneSchema);
//Collection name is automatically determined by Mongoose

module.exports = DroneModel;
