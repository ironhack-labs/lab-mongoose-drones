// Iteration #1
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/drones-dev');


const Drone = require('../models/drone.js');


const drones = [
  { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];


  // db.drones.insertMany()
Drone.create(drones, (err, droneDocs) => {
  if (err) {
    throw err;
  }

  droneDocs.forEach((oneDrone) => {
    console.log(`NEW DRONE ${oneDrone.droneName} -> ${oneDrone._id}`);
  });
  mongoose.disconnect();
});
