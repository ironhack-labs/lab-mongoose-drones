const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones', {useMongoClient: true});

const Drone = require('../models/drone');

const drones = [
  {
    droneName: 'Irondrone 2K',
    propellers: 4,
    maxSpeed: 700,
  },
  {
    droneName: 'Xiaomi Phantom',
    propellers: 6,
    maxSpeed: 1500,
  },
  {
    droneName: 'JRC',
    propellers: 4,
    maxSpeed: 100,
  }
];

Drone.collection.drop();

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((drone) => {
    console.log(drone.droneName)
    console.log(drone.propellers)
    console.log(drone.maxSpeed)
    console.log('------------')
  });
  mongoose.connection.close();
});
