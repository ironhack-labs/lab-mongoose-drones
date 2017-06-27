// Iteration
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/droneDb');

const Drone = require ('../models/drone-model.js');

const droneInfoArray = [

      { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
      { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
      { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }

];

Drone.create(
  droneInfoArray,
  (err, droneResults) => {
    if (err){
      console.log('Error');
      return;
    }
    droneResults.forEach((oneDrone)=>{
      console.log("new Drone: "+ oneDrone.droneName );
    });
  }
);
