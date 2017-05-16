// Iteration #1
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone-model.js');

// Create an array of 3 objects, each with droneName, 
// propellers and maxSpeed for our initial drones.
const drones = [
  {
    droneName: 'Holy Stone HS170',
    propellers: 4,
    maxSpeed: 15,
  },
  {
    droneName: 'MJX X101C',
    propellers: 4,
    maxSpeed: 10,
  },
  {
    droneName: 'Parrot AR Drone 2.0',
    propellers: 4,
    maxSpeed: 8,
  },
  {
    droneName: 'Traxxas 7908 Aton',
    propellers: 4,
    maxSpeed: 8,
  },
  {
    droneName: 'DJI Phantom 3 Professional',
    propellers: 3,
    maxSpeed: 12,
  }
];


// db.drone.insertMany()
Drone.create(drones, (err, droneDocs) => {
  if (err) {
    throw err;
  }

  droneDocs.forEach((oneDrone) => {
    console.log(`NEW PRODUCT ${oneDrone.droneName} -> ${oneDrone._id}`);
  });

  mongoose.disconnect('');

});