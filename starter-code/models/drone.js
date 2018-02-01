// import { model } from 'mongoose';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DronesSchema = new Schema({

  name: String,
  propellers: Number,
  maxSpeed: Number
});

const Drone = mongoose.model('drones', DronesSchema);
module.exports = Drone;
