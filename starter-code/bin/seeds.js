// Iteration #1
const mongoose    = require('mongoose');

mongoose.connect('mongodb://localhost/lab-mongoose-drones');

const Drone       = require('../models/drone-model.js');

const drones = [
    {droneName: 'Millenial Drone', propellars: 16, maxSpeed: 120},
    {droneName: 'Octocopter Drone', propellars: 8, maxSpeed: 120},
    {droneName: 'Nano Drone', propellars: 4, maxSpeed: 120}
  ];

Drone.create(drones, (err, droneTypes)=>{
  if(err){
    throw err;
    }
  droneTypes.forEach((oneDrone)=>{
    console.log(`Drone: ${oneDrone.droneName} -> ${oneDrone._id}`);
  });
});
