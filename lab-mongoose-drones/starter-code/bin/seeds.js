// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev', {useMongoClient: true});

const Drone = require("../models/drone");

const droneData = [
  { droneName: 'R2D2', propellers: 3, maxSpeed: 12 },
  { droneName: 'Wall-E', propellers: 4, maxSpeed: 20 },
  { droneName: 'EVA', propellers: 6, maxSpeed: 18 }
];

Drone.create(droneData, (err, robots) => {
  if(err) {
    throw err;
  }
  robots.forEach((droneData) => {
    console.log(droneData.droneName);
  });
  mongoose.connection.close();
});
