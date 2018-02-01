// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone');

mongoose.connect('mongodb://localhost/drones-dev').then(() => console.log("Conectado!"));

const droneData = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.create(droneData, (err, result) => {
  if(err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

