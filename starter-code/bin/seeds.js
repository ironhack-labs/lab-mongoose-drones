// Iteration #1
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/drones-dev');

const DroneModel = require('../models/drone.js');

const droneArray = [
     {
       droneName: 'Dispector',
       propellers: 4,
       maxSpeed: 50
     },
     {
       droneName: 'Raptor',
       propellers: 8,
       maxSpeed: 90
     },
     {
     droneName: 'Ghost',
     propellers: 12,
     maxSpeed: 150
   }
];

DroneModel.create (
  droneArray,
  (err, droneResults) => {
    if (err) {
      console.log('ERROR');
      return;
    }
    droneResults.forEach((oneDrone) => {
      console.log(`New drone ${oneDrone.droneName}`);
      mongoose.disconnect();
    });
  }
);
