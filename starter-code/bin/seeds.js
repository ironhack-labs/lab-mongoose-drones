// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone');

const drones = [
  {name: 'D-One', propellers: 1, maxSpeed: 11},
  {name: 'D-Two', propellers: 2, maxSpeed: 22},
  {name: 'D-Three', propellers: 3, maxSpeed: 33}

];

Drone.create(drones, (err, docs)=>{
  if(err){
    throw err;
  } else {
    drones.forEach((drone)=>{
      console.log(drone.name);
    });
    mongoose.connection.close();
  }
});
