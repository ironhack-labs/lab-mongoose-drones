// Iteration #1
/*jshint esversion:6*/
const drones = [
  {
    droneName: "Alpha" ,
    propellers: 4,
    maxSpeed: 10

  },
  {
    droneName: "Tango",
    propellers: 6,
    maxSpeed: 20

  },
  {
    droneName: "Whisky" ,
    propellers: 8,
    maxSpeed: 30

  }
];
// bin/seeds.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');
const Drone = require('../models/drone');

// bin/seeds.js
Drone.create(drones, (err, docs) => {
  if (err) { throw err ;}
  docs.forEach( (drones) => {
    console.log(drones.droneName);
  });
  mongoose.connection.close();
});
