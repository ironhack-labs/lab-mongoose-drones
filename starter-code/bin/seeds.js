// Iteration #1
const Drone = require('../models/drone.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/drones-dev');

let droneArray = [
{
  droneName: "General Atomics",
  propellers: 3,
  maxSpeed: 7
},
{
  droneName: "Creeper XL",
  propellers: 2,
  maxSpeed: 18
},
{
  droneName: "Courier 3000",
  propellers: 1,
  maxSpeed: 10
}
];

Drone.create(droneArray, (err, drone) => {
  if (err) {
    console.log(err);
  }
  drone.forEach((d) => {
    console.log(`Se ha creado ${d._id}`);
  });
  mongoose.connection.close();
});
