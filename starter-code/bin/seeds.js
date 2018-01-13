// Iteration #1
require ('../config/db.config.js');

const mongoose = require('mongoose');

const Drone = require ('../models/drone.js');

const drones = [
  {
  name: 'Halcon Milenario',
  propellers: 1 ,
  maxSpeed: 20,
  },
    {
    name: 'Ala X',
    propellers: 4,
    maxSpeed: 18 ,
  },
  {
  name: 'Apolo 13',
  propellers: 3,
  maxSpeed: 15,
  },
];

Drone.create(drones).then((docs) => {
  docs.forEach((drone) => {
    console.log(drone.name);
  });

  mongoose.connection.close();
});
