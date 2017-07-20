// Iteration #1

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone');

const drones = [
  {
    droneName: 'Snail',
    propellers: 4,
    maxSpeed: 50
  },
  {
    droneName: 'Turtle',
    propellers: 5,
    maxSpeed: 80
  },
  {
    droneName: 'Cheetah',
    propellers: 7,
    maxSpeed: 400
  }
];

Drone.create(drones)
.then((drones) => {
  console.log(drones.droneName);
})
.catch((error) => {
  console.log('Drone error');
})
.then(() => {
  mongoose.connection.close();
});
