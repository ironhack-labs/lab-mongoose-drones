const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone');
const drones = [
  {
    droneName: 'Freefly Alta 8',
    propellers: 8,
    maxSpeed: 70
  },
  {
    droneName: 'Parrot Airborne Cargo Travis',
    propellers: 4,
    maxSpeed: 18
  },
  {
    droneName: 'DJI Mavic Pro Fly More Combo',
    propellers: 4,
    maxSpeed: 65
  }
];

Drone.create(drones, (err, dr) => {
  if (err) {
    throw err;
  }

  dr.forEach((drone) => {
    console.log(drone.droneName);
  });

  //mongoose.connection.close();
});
