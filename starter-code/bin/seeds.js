'use strict';

// Iteration #1
const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/drones', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

const Drone = require('../models/drone');

const drones = [{
  name: 'Procrastinator 3000',
  propellers: 153,
  maxSpeed: 300000
},
{
  name: 'Getting shit done 3000',
  propellers: 25,
  maxSpeed: 200
},
{
  name: 'Fly boy',
  propellers: '4',
  maxSpeed: 70
}
];

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((drone) => {
    console.log(drone.name);
  });
  mongoose.connection.close();
});
