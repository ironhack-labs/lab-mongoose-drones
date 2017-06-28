const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const myDroneSchema = new Schema({
  droneName: { type: String },
  propellers: { type: Number },
  maxSpeed: { type: Number }
});

const DroneModel = mongoose.model("Drone", myDroneSchema);

//collections name is automatically determined by Mongoose
//product -> products -> db.products.find()


module.exports = DroneModel;
