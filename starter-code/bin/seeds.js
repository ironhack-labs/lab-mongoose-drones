// Iteration #1
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone-model.js');

const drones = [
  {
    droneName: 'Mavic Pro',
    propellers: 8,
    maxSpeed: 20
  },
  {
    droneName: 'Yuneec Typhoon H4k',
    propellers: 6,
    maxSpeed: 18
  },
  {
    droneName: 'Parrot Bebop',
    propellers: 4,
    maxSpeed: 16
  }
];

Drone.create(drones, (err, droneDocs)=>{
  if (err){
    throw err;
  }
  droneDocs.forEach((oneDrone)=>{
    console.log(`New Drone: ${oneDrone.droneName} -> ${oneDrone._id}`);
  });
});
