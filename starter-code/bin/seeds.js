/* jshint esversion:6 */

const droneData = [
  { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

// bin/seeds.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');
const Drone = require('../models/drone');

// bin/seeds.js
Drone.create(droneData, (err, docs) => {
  if (err) { throw err; }
  docs.forEach( (docs) => {
    console.log(docs.droneName);
  });
  mongoose.connection.close();
});
