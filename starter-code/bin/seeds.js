// Iteration #1
const mongoose = require('mongoose');

require('../config/db.config');

const Drone = require('../models/drone');

const DroneSeed = [
  {
    name: "Drone de Julio",
    propellers: 2,
    maxSpeed: 50
  },{
    name: "Drone de Carlos",
    propellers: 4,
    maxSpeed: 60
  },{
    name: "Drone de Bart",
    propellers: 6,
    maxSpeed: 70
  }
];

Drone.create(DroneSeed).then((docs) => {
  docs.forEach((drone) => {
    console.log(drone.name)
  });

  mongoose.connection.close();
});
