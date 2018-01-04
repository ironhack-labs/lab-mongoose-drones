// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drone', { useMongoClient: true });

const Drone = require('../models/drone.js')

const droneData = [
  {
    name: 'Atos',
    propellers: 4,
    maxSpeed: 250
  },
  {
    name: 'Portos',
    propellers: 6,
    maxSpeed: 1250
  },
  {
    name: 'Aramis',
    propellers: 2,
    maxSpeed: 125
  }
]

Drone.create(droneData, (err, docs) => {
  if (err) {
    throw err;
  }
  else {
    docs.forEach(drone => {
      console.log(drone);
    });
  }
  mongoose.connection.close();
});