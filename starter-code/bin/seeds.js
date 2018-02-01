// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone');

const drones = [
  {
    name : 'Millenium Falcon',
    propellers:  4,
    maxSpeed: 3000000
  },
  {
    name : 'UAV',
    propellers:  8,
    maxSpeed: 200
  },
  {
    name : 'Death Star',
    propellers:  10,
    maxSpeed: 10
  }
];

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((product) => {
    console.log(product.name)
  });
  mongoose.connection.close();
});