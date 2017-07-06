const Drone = require('../models/drone');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/drones-dev');

const drones = [
{droneName: 'Hawk', propellers: 3, maxSpeed: 12},
{droneName: 'Eagle', propellers: 4, maxSpeed: 20},
{droneName: 'Sentinel', propellers: 6, maxSpeed: 18}
];

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((drone) => {
    console.log(drone._id)
  });
    mongoose.connection.close();
});


