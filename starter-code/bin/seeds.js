// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');
const Drone = require('../models/drone');



const drones = [
    {
        name: "DJI Mavic Pro",
        propellers: 4,
        maxSpeed: 20
    },
    {
        name: "DJI Butterfly",
        propellers: 8,
        maxSpeed: 15
    },
    {
        name: "DJI Sonic",
        propellers: 6,
        maxSpeed: 40
    }
];

  // bin/seeds.js
Drone.create(drones, (err, docs) => {
    if (err) {
      throw err;
    }
    docs.forEach((drones) => {
      console.log(drones.name)
    });
    mongoose.connection.close();
  });