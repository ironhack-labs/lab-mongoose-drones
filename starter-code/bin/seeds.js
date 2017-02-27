// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');
const Drone = require('../models/drone.js');

const drones = [
  {
    droneName:'DJI Mavic Pro',
    propellers: 4,
    maxSpeed: 45
  },
  {
    droneName:'DJI Phantom 4 Pro',
    propellers: 4,
    maxSpeed: 45
  },
  {
    droneName:'DJI Mavic Pro',
    propellers: 4,
    maxSpeed: 58
  }
];

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((drone) => {
    console.log(drone.droneName);
  });
  mongoose.connection.close();
});
