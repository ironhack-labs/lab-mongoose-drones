/*jshint esversion: 6*/
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');
const Drone = require('../models/drone');

const drone = [
  {
    droneName: 'Bebop',
    propellers: 2,
    maxSpeed: 10,
  },
  {
    droneName: 'Inspire',
    propellers: 3,
    maxSpeed: 20,

  },
  {
    droneName: 'Mambo',
    propellers: 4,
    maxSpeed: 30,

  }
];

Drone.create(drone, (err, docs) => {
  if (err) { throw err }
  docs.forEach( (drone) => {
    console.log(drone.droneName);
  });
  mongoose.connection.close();
});
