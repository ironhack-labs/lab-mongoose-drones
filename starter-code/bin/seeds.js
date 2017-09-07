// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone');
  const {dbURL} = require('../configdb/db');

mongoose.connect(dbURL, {useMongoClient: true});

const drones = [
  {
    droneName: 'Miguel',
    propellers: 4,
    maxSpeed: 18
  },
  {
    droneName: 'Raquel',
    propellers: 6,
    maxSpeed: 24
  },
  {
    droneName: 'Mirra',
    propellers: 2,
    maxSpeed: 12
  },
]

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }
  
  docs.forEach(d => console.log(d.droneName));
  mongoose.connection.close();
});
