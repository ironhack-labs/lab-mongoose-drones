
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const droneSchema = new Schema({
  droneName: {type: String},
  propellers: {type: Number, default: 1},
  maxSpeed: {type: Number, default:1},

});

// Model
// construction function that allows us to interact with a single collection


const DroneModel = mongoose.model('drone', droneSchema);


// Collection name is automatically determined by Mongoose
//--------------------------------------------------------
// Product -> products -> db.products.find()



// IF YOU FORGET THIS YOU WILL DIE
module.exports = DroneModel;
