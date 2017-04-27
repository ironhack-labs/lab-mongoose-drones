// Iteration #1
/*jshint esversion:6*/

const mongoose = require('mongoose');
let Drone = require('../models/drone');

mongoose.connect('mongodb://localhost/drones-dev');

const drones = [
  {
    droneName: 'Creeper XL 500',
    propellers: 3,
    maxSpeed: 12
  },
  {
    droneName: 'Racer 57',
    propellers: 4,
    maxSpeed: 20
  },
  {
    droneName: 'Courier 3000i',
    propellers: 6,
    maxSpeed: 18 }
];

Drone.collection.drop();

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((drone) => {
    console.log(drone.droneName);
  });
  mongoose.connection.close();
});
