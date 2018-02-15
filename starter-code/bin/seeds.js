// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone');

const drones = [
  {
    name: 'M0si-thunder',
    propellers: 24,
    maxSpeed: 9001
  },
  {
    name: 'Wh1te-Ice',
    propellers: 0,
    maxSpeed: 0
  },
  {
    name: 'f4st-madafaka',
    propellers: 36,
    maxSpeed: 1000000

  }
]

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err
  }
  mongoose.connection.close();
})