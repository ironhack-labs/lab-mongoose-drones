// Iteration #1
const mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require("../models/drone.js");


const droneData = [
  { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.create(droneData, (err, droneList) => {
  if (err) {
    throw err;
  }
  droneList.forEach((oneDrone) => {
    console.log('NEW DRONE ${oneDrone.droneName} -> ${oneDrone.propellers} -> ${oneDrone.maxSpeed} -> ${oneDrone._id}');
  });
});
