// Iteration #1
const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/drone-db', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});

const Drone = require('../models/drone');

// bin/seeds.js

const droneData = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

// bin/seeds.js
Drone.create(droneData, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((droneObject) => {
    console.log(droneObject.name);
  });
  mongoose.connection.close();
});
