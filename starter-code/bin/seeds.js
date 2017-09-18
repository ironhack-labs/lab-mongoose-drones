// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev', {useMongoClient: true});
const Drone = require('../models/drones');

const drones = [
{
  droneName: 'NSA',
  propellers: 8,
  maxSpeed: 50
},
{
  droneName: 'Police',
  propellers: 6,
  maxSpeed: 30
},
{
  droneName: 'Personal',
  propellers: 4,
  maxSpeed: 25,
}
];

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((drones) => {
    console.log(drones.droneName)
  });
  mongoose.connection.close();
});
