// Iteration #1
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/drones-dev', {useMongoClient: true});

const Drone = require('../models/drone.js');

const droneData = [
  {
    droneName: 'Cyborg XxL 600',
    propellers: 3,
    maxSpeed: 12
  },
  {
    droneName: 'Flash 3000',
    propellers: 4,
     maxSpeed: 20
   },
  {
     droneName: 'Bladerunner Nano 400',
     propellers: 6,
     maxSpeed: 18
   }
];

Drone.create(droneData, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((drone) => {
    console.log(drone.droneName)
  });
  mongoose.connection.close();
});
