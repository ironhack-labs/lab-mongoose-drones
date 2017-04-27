// Iteration #1
/*jshint esversion:6*/
const mongoose = require('mongoose');
const Drone = require('../models/drone');

mongoose.connect('mongodb://localhost/drones-dev');

const drones = [
  {
    droneName: 'Invader',
    propellers: 4,
    maxSpeed: 20,
  },
  {
    droneName: 'Galaxy',
    propellers: 6,
    maxSpeed: 30,
  },
  {
    droneName: 'Egle',
    propellers: 4,
    maxSpeed: 22,
  }
];

Drone.create(drones, (err, docs)=> {

  if(err) { throw err;}
  docs.forEach((drone) => {
    console.log(drone.droneName);
  });

  mongoose.connection.close();
});
