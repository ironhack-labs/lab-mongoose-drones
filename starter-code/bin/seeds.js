// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drone', {useMongoClient: true});
const Drone = require('../models/drone');

const drone = [
  {
    droneName: 'Mega Death Drone',
    propellers: 4,
    maxSpeed: '35 Meters/second'
    },
  {
    droneName: 'Semi Mega Death Drone',
    propellers: 4,
    maxSpeed: '20 Meters/second'
  },
  {
    droneName: 'Mega Meh Drone',
    propellers: 4,
    maxSpeed: '5 Meters/second'
  }
];


Drone.create(drone, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((drone) => {
    console.log(drone.name)
  });
  mongoose.connection.close();
});
