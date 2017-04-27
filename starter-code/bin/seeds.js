/*jshint esversion: 6*/
// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/drone');

mongoose.connect('mongodb://localhost:27017/drones-dev');

const drones = [
  {
    droneName: 'R2D2',
    propellers: 2,
    maxSpeed: 60
  },
  {
    droneName: 'C3PO',
    propellers: 4,
    maxSpeed: 10
  },
  {
    droneName: 'BB-8',
    propellers: 1,
    maxSpeed: 100
  },
];

Drone.create(drones, (err, docs)=> {

  if(err)
   {throw err;}
  docs.forEach((drone) => {
    console.log(drone.droneNome);
  });

  mongoose.connection.close();
});
