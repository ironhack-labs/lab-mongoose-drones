// Iteration #1
const mongoose    = require('mongoose');

mongoose.connect('mongodb://localhost/lab-mongoose-drones');

const Drone     = require('../models/drone.js');

const drones = [
    {
      droneName: 'Millenial Drone',
      propellars: 16,
      maxSpeed: 120
    },
    {
      droneName: 'Octocopter Drone',
      propellars: 8,
      maxSpeed: 120
    },
    {
      droneName: 'Nano Drone',
      propellars: 4,
      maxSpeed: 120
    }
];

Drone.create(drones, (err, droneTypes)=>{
              // | things you want to be created (the array rceated above)
  if(err){
    throw err; //use throw in smaller files/ safe to throw because we're in a small file
    }
  droneTypes.forEach((oneDrone)=>{
    //results of a create is an array of documents of that array of documents saved in array
    console.log(`Drone: ${oneDrone.droneName} -> ${oneDrone._id}`);
    //                              this is how to actually display the information.
    //                              it has an _id now that it is save in the database
  });
});
