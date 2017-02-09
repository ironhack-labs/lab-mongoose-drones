// Iteration #1

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');
const Drone = require('../models/drone');

// bin/seeds.js

const drones = [
  {
    name        :'Fly-Bat',
    propellers  :8,
    maxSpeeds   :24
  },
  {
    name        :'Fly-Dragon',
    propellers  :12,
    maxSpeeds   :48
  },
  {
    name        :'Fly-Speedstar',
    propellers  :4,
    maxSpeeds   :12
  }
];

Drone.create(drones, (err, docs) => {
  if (err) { throw err };

  docs.forEach( (drone) => {
    console.log(drone.name)
  })
  mongoose.connection.close();
});
