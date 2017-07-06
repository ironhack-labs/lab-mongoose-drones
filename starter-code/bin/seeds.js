const mongoose = require('mongoose');
mongoose.connect ('mongodb://localhost:27017/drones-dev');
const Drone = require('../models/drone');  // will obtain the exported variable (if any)

const droneData = [
  {
    droneName: 'Creeper XL 500',
    propellers: 3,
    maxSpeed: 12,
  },
  {
    droneName: 'Racer 57',
    propellers: 4,
    maxSpeed: 20,
  },
  {
    droneName: 'Courier 3000i',
    propellers: 6,
    maxSpeed: 18,
  }
];

Drone.create(droneData,(err,docs) => {   // we convert the array of products and save them to the database
  if (err) {
    throw err;
  }

  docs.forEach((drone) => {
    console.log(drone.droneName);
  });
  mongoose.connection.close();  // we close (kill) the connection to the server
});
