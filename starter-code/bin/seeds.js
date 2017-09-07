// Iteration #1
const Drone = require("../models/drone.js");
const Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost/drones-dev');

const defaultDrone = [
  new Drone({droneName: "ByronDron", propellers: 4, maxSpeed: 100}),
  new Drone({droneName: "MarkDron", propellers: 4, maxSpeed: 100}),
  new Drone({droneName: "AndreDron", propellers: 4, maxSpeed: 100})
];

Drone.create(defaultDrone, (err, drones) => {
  if(err){
    throw err;
  }
  Mongoose.disconnect();
});
