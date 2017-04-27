const mongoose = require('mongoose');
let Drone = require('../models/modelDrone');
mongoose.connect('mongodb://localhost/drones-dev');

const drones = [
  {
    droneName: 'Jander1',
    propellers: 4,
    maxSpeed: 16,
  },
  {
    droneName: 'gromenagüer',
    propellers: 4,
    maxSpeed: 36},
  {
    droneName: 'Candemore',
    propellers: 3,
    maxSpeed: 12},
  {
    droneName: 'Jarl3',
    propellers: 3,
    maxSpeed: 19},
];

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((Drone) => {
    console.log(drones.name);
  });
  mongoose.connection.close();
});
