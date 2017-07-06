// Iteration #1

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');
const Drone = require('../models/drones');

const drones = [
  {
    droneName: "Speedy",
    propellers: 6,
    maxSpeed: 1000
  },
  {
    droneName: "Slowpoke",
    propellers: 2,
    maxSpeed: 100
  },
  {
    droneName: "Ironhack",
    propellers: 4,
    maxSpeed: 700
  }
];

// bin/seeds.js
Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((drone) => {
    console.log(drone.droneName)
  });

  mongoose.connection.close();
});