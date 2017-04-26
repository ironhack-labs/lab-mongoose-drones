// Iteration #1

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone');

const drones = [
  {
    droneName: "Millenium Falcon",
    propellers: 8,
    maxSpeed: 100
  },
  {
    droneName: "X Wing",
    propellers: 4,
    maxSpeed: 50
  },
  {
    droneName: "Imperial Shuttle",
    propellers: 3,
    maxSpeed: 30
  }
];

Drone.create(drones, (err, droneDoc) => {
  if (err) {
    throw err;
  }

  droneDoc.forEach( (oneDrone) => {
    console.log(`Success: ${oneDrone.droneName} -> ${oneDrone._id}`);
  });
});
