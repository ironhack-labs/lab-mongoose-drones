const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//
// const productSchema = new Schema({
const droneSchema = new Schema({
  // String (name of the drone model, like General Atomics MQ-9 Reaper)
  droneName: String,
  // - Number (amount of propellers, like 4)
  maxSpeed: Number,
  // - Number (meters per second for the drone's maximum speed, like 18)
  propellers: Number
});

// const productSchema = new Schema({
//   name: String,
//   price: Number,
//   imageUrl: String,
//   description: String
// });
// const Product = mongoose.model('Product', productSchema);
const Drone = mongoose.model('Drone', droneSchema);
// module.exports = Product;
module.exports = Drone;
