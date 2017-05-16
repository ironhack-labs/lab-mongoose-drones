// Iteration #1
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone.js');

const drones = [
  {
    droneName: 'DJI Phantom 4',
    propellers: 4,
    maxSpeed: 45
  },
  {
    droneName: 'Typhoon Q500 4K Quadcopter',
    propellers: 4,
    maxSpeed: 40
  },
  {
    droneName: 'Yuneec Typhoon H Hexacopter Pro',
    propellers: 8,
    maxSpeed: 60
  }
];

Drone.create( drones, (err, droneDocs) => {
  if(err){
    throw err;
  }

  droneDocs.forEach((oneDrone) => {
    console.log(`New Drone ${oneDrone.droneName} -> ${oneDrone._id}`);
  });
});
