// Iteration #1
const mongoose = require('mongoose');

require('../config/db.config');

const Drone = require('../models/drone.model');

const drones = [
  {
    name: "Drone 1",
    propellers: 5,
    maxSpeed: 320,
  },
  {
    name: "Drone 2",
    propellers: 1,
    maxSpeed: 20,
  },
  {
    name: "Drone 3",
    propellers: 15,
    maxSpeed: 50,
  }
];

Drone.create(drones).then((docs) => {
  docs.forEach((drone) => {
    console.log(drone.name)
  });

  mongoose.connection.close();
});