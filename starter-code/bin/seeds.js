// Iteration #1
const mongoose = require('mongoose');

const DroneModel = require('../models/drones.js');

mongoose.connect('mongodb://localhost/drones');

var drones = [
  {
    droneName: "ZT14",
    propellers: 5,
    maxSpeed: 22
  },
  {
    droneName: "James",
    propellers: 4,
    maxSpeed: 19
  },
  {
    droneName: "ULK980",
    propellers: 7,
    maxSpeed: 25
  }
];

DroneModel.create(
  // 1st argument -> array of drones to save
  drones,

  // 2nd argument -> callback
  (err, success) => {
      if (err) {
          console.log('Wrong!');
          console.log(err);
          return;
      }

      success.forEach(drone => {
          console.log('New Drone ---> ' + drone.droneName);
      });
  }
);
