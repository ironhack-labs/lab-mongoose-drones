// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/W4D5E1');
const Drone = require('../models/drones.js');

// const Drones = [
//   {
//     droneName: ,
//     propellers:  ,
//     maxSpeed:
//   }
// ];

const drone1 = {
  droneName: "drone1",
  propellers: 4,
  maxSpeed: 10
};
const drone2 = {
  droneName: "drone2",
  propellers: 6,
  maxSpeed: 14
};
const drone3 = {
  droneName: "drone3",
  propellers: 8,
  maxSpeed: 18
};
Drone.create(drone1, (err, thing) => {
  if (err) {
    throw err;
  }
});

Drone.create(drone2, (err, thing) => {
  if (err) {
    throw err;
  }
});

Drone.create(drone3, (err, thing) => {
  if (err) {
    throw err;
  }
  mongoose.disconnect();
});
