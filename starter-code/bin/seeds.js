// Iteration #1
const mongoose = require('mongoose');

require('../config/db.config');

const Drone = require('../models/drone.model');

const drons = [{
    name: 'My first drone',
    propellers: 8,
    maxSpeed: 20,
  },
  {
    name: 'My second drone',
    propellers: 23,
    maxSpeed: 400,
  },
  {
    name: 'My third drone',
    propellers: 1,
    maxSpeed: 4,
  }
];

Drone.create(drons).then((docs) => {
  docs.forEach((drone) => {
    console.log(drone.name)
  });

  mongoose.connection.close();
});
