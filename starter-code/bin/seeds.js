// Iteration #1
const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/drones-dev', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});

const Drone = require('../models/drone');

const drones = [
    {
        name       : 'NSA Surveillance Drone',
        propellers      : 6,
        maxSpeed   : 10,
    },
    {
        name       : 'DJI Mavic Pro',
        propellers      : 8,
        maxSpeed   : 15,
    },
    {
        name       : 'DJI Phantom 3',
        propellers      : 10,
        maxSpeed   : 20,
    }
  ];

  Drone.create(drones, (err, data) => {
    if (err) {
      throw err;
    }
  
    data.forEach((drones) => {
      console.log(drones.name)
    });
    mongoose.connection.close();
  });