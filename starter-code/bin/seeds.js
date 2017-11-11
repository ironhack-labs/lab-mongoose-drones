// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev', {
  useMongoClient: true});

const Drone = require('../models/drone');

const drones = [{
    droneName: 'General Atomics MQ-9 Reaper',
    propellers: 4,
    maxSpeed: 18
  },
  {
    droneName: 'Torpedo',
    propellers: 8,
    maxSpeed: 50
  },
  {
    droneName: 'Tortuga',
    propellers: 3,
    maxSpeed: 10
  }
];

Drone.collection.drop();

Drone.create(drones, (err, dron) => {
  if (err) {
    throw err;
  }
  dron.forEach((e) => {
    console.log(e.droneName);
  });
  mongoose.connection.close();
});
