/*jshint esversion: 6*/

// Iteration #1

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drone4Life');
const Drone = require('../models/drone');

const drones = [
  {
    droneName: "Max Calba",
    propellers: 1,
    maxSpeed: 1
  },
  {
    droneName: "Jaws",
    propellers: 16,
    maxSpeed: 100
  },
  {
    droneName: "Ernst Stavro Blofeld",
    propellers: 4,
    maxSpeed: 20
  }
];

Drone.create(drones, (err, docs) => {
  console.log(drones);
  if (err) { throw err; }
  docs.forEach( (droneObject) => {
    console.log(droneObject.droneName);
  });
  mongoose.disconnect();
});
