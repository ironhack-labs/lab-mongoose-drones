// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/droneshop');

const Drone = require('../models/drone-model.js');

const droneArray = [
  {
    droneName: 'General Atomics MQ-9 Reaper',
    propellers: 4,
    maxSpeed: 18
  },
  {
    droneName: 'Crystal\'s Drone',
    propellers: 6,
    maxSpeed: 16
  },
  {
    droneName: 'Gabby\'s Drone',
    propellers: 5,
    maxSpeed: 17
  }
];

Drone.create(
  droneArray,           //1st arg --> array of product info objects
  (err, droneResults) => {  //2nd arg --> callback
    if (err) {
      console.log('OMG! Database error.');
      return;
    }

    droneResults.forEach((drone) => {
      console.log('New Drone! ' + drone.droneName);
    });
  }
);
