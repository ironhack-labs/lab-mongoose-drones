// Iteration #1
const mongoose = require('mongoose');

require('../config/db.config');

const Drone = require('../models/drone');

const DroneSeed = [
  {
    name: "MX-35  Droneblade",
    propellers: 2,
    maxSpeed: 50
  },{
    name: "Megablast Hi-Flyer 2067XJ",
    propellers: 4,
    maxSpeed: 60
  },{
    name: "Spydrone Silentfly TROG5000-SH",
    propellers: 6,
    maxSpeed: 43
  }
];

Drone.create(DroneSeed).then((docs) => {
  docs.forEach((drone) => {
    console.log(drone.name)
  });

  mongoose.connection.close();
});
