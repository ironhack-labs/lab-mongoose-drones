// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone.js');

const droneData = [
  {
    name: 'Atlan',
    propellers: 6,
    maxSpeed: 100
  },
  {
    name: 'Armis',
    propellers: 5,
    maxSpeed: 200
  },
  {
    name: 'Pilot',
    propellers: 7,
    maxSpeed: 150
  }
];

Drone.create(droneData, (err, docs) => {
  if (err) {
    throw err;
  }
  else {
    docs.forEach(drone => {
      console.log(drone);
    });
  }
  mongoose.connection.close();
});