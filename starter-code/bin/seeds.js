// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone');

const drones = [
  {
    droneName: 'Super Drone',
    propellers: 2,
    maxSpeed: 12,
  },
  {
    droneName: 'Mega Drone',
    propellers: 4,
    maxSpeed: 16,
  },
  {
    droneName: 'Uber Drone',
    propellers: 6,
    maxSpeed: 20,
  }
];


Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((drone) => {
    console.log(drone.droneName + " is in da place as ")
  });
  mongoose.connection.close();
});
