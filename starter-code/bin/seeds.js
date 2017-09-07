// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drones');
const {dbUrl} = require("../config/db");

mongoose.connect('mongodb://localhost/drones-dev');

const array = [
  {
    "droneName": "Falcon",
    "propellers": 4,
    "maxSpeed": 18
  },
  {
    "droneName": "Hellacopter",
    "propellers": 1,
    "maxSpeed": 3
  },
  {
    "droneName": "PerroMalo",
    "propellers": 4,
    "maxSpeed": 12
  }
];

Drone.create(array, (error, docs) => {
  if (error) {
    throw error;
  }
  docs.forEach (p => console.log(p.droneName));
  mongoose.connection.close();
});
