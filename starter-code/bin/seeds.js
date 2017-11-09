// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev', {useMongoClient: true});
const Drone = require('../models/drone');

Drone.collection.drop();

const drones = [
  {
    droneName: 'Millenium falcon',
    propellers: 4,
    maxSpeed: 1000,
  },
  {
    droneName: 'drone1',
    propellers: 1,
    maxSpeed: 1,
  },
  {
    droneName: 'Creeper XL 500',
    propellers: 3,
    maxSpeed: 12,
  }
];

Drone.create(drones, (err, docs) => {
  if (err){throw err;}
  console.log("Drones created.");

  mongoose.connection.close();
});
