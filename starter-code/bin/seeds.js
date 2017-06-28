// Iteration #1

// Iteration #1

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongooseDrones'); //database name "mongooseDrones"

const Drone = require('../models/drone.js');

const dronesInfoArray = [
  {
    droneName: 'Darren',
    propellers: 6,
    maxSpeed: 1000
  },
  {
    droneName: 'Daniel',
    propellers: 4,
    maxSpeed: 800
  },
  {
    droneName: 'Anthony',
    propellers: 2,
    maxSpeed: 20
  },

];



Drone.create(
  dronesInfoArray,          //1st argument -> array of product info objects

  (err, droneResults) =>{  // 2nd argument -> callback!
    if(err){
      console.log('ZOMGGG! Database error.');
      return;
    }

    droneResults.forEach((oneDrone)=>{
      console.log('New Drone! ' + oneDrone.droneName);
    });
  }
);
