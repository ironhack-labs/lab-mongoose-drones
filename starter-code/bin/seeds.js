// Iteration #1

const mongoose = require('mongoose');
                            // database name
mongoose.connect('mongodb://localhost/crudDrones');
mongoose.disconnect();


// this connects the model which is in the file below
const Drone = require('../model/drone.js');

const droneCollection = [
  // Drone #1
  { droneName: 'FisherPrice myFirstDrone' ,
    propellers: 1,
    maxSpeed: 5
  },
  // Drone #2
  { droneName: 'The Flash',
    propellers: 25 ,
    maxSpeed: 9999
  },
  { droneName: 'R2D2' ,
    propellers: 0,
    maxSpeed: 10
  }
];

Drone.create(
  droneCollection,          //1st Argument -> array of product info objects
  (err, droneBuild) =>{  //2nd Argument -> callback!
    if (err){
      console.log('No stuff for you! DataBase Error.');
      return;  //early return
    }

    droneBuild.forEach((oneDrone)=>{
      console.log('New Drone Manufactured!! ' + oneDrone.droneName);
      });
  }
);
