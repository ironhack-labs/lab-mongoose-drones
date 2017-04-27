/*jshint esversion: 6 */
const mongoose = require('mongoose');
const Drone = require('../models/drone.js');
mongoose.connect('mongodb://localhost/drones-dev');

const drons = [
  {
    droneName: "Pepe",
    propellers: 4,
    maxSpeed: 50
  },
  {
    droneName: "Juan",
    propellers: 6,
    maxSpeed: 30
  },
  {
    droneName: "Manolo",
    propellers: 8,
    maxSpeed: 20
  }
];
Drone.remove({}, function(err) {
  console.log('collection removed');
});

Drone.create(drons, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((drons) => {
    console.log(drons.droneName);
  });
  mongoose.connection.close();
});
