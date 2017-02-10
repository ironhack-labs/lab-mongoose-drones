/* jshint esversion: 6 */

// Iteration #1

const drones = [
    { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

// bin/seeds.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');
const drone = require('../models/drone');

// bin/seeds.js
drone.create(drones, (err, docs) => {
  if (err) { throw err };
  docs.forEach( (drones) => {
      console.log(drones);
    });
    mongoose.connection.close();
  });
