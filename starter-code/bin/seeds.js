// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');

// we have to connect to the DB again here
// becuase seed.js is SEPARATE from app.js


const  Drone = require('../models/drone.js');

const droneArray = [
  {
    droneName: 'DroneOne',
    propellers:  1,
    maxSpeed: 10,


  },
  {
    droneName: 'DroneTwo',
    propellers:  2,
    maxSpeed: 20,

  },
  {
    droneName: 'DroneThree',
    propellers:  3,
    maxSpeed: 30,


  }

];



Drone.create(
  droneArray,     // 1st Argument -> array of product info objects
  (err, droneResults) => {    // 2nd Argument -> callback
    if (err){
      console.log('Database error.');
      return;
    }

    droneResults.forEach((oneDrone)=> {
      console.log('New Drone! '+ oneDrone.name);
    });
  }
);
