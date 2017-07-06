// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dronedb');

const Drone = require('../models/drone');


// const droneData = [
//   { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
//   { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
//   { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
// ];

const droneData = [
 { droneName: 'YOYOYO XL 500', propellers: 123, maxSpeed: 5 }];


Drone.create(droneData, (err, droneinfo) => {
  if (err) {
    throw err;
  }
  droneinfo.forEach((drone) => {
    console.log(drone.droneName);
  });
  mongoose.connection.close();
});
