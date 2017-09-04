// Iteration #1
const mongoose = require('mongoose');
const DroneModel = require('../models/drone.js');

mongoose.connect('mongodb://localhost/drones-dev');

const droneArray = [
  {
  droneName: 'DJ Phantom 7',
  propellers: 4,
  maxSpeed: 20
},
{
  droneName: 'Parrot Disco',
  propellers: 1,
  maxSpeed: 15
},
{
  droneName: 'Megatron Death Daddy',
  propellers: 8,
  maxSpeed: 100
}
];

DroneModel.create(
  droneArray,
  (err, dronesAfterSave) => {
      if (err) {
        console.log('Create error');
        console.log(err);
        return;
      }
      dronesAfterSave.forEach((oneDrone) => {
        console.log(oneDrone.droneName);
      });
  }
);
