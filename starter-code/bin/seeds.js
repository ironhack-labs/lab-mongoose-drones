// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');
const Product = require('../models/drone');
const Drone = require('../models/drone.js');

const drones = [
    {
      name: 'Drone1',
      propellers: 4,
      maxSpeed: 18,
    },
    {
        name: 'Drone2',
        propellers: 6,
        maxSpeed: 25,
    },
    {
        name: 'Drone3',
        propellers: 8,
        maxSpeed: 29,
    }
  ];

Drone.create(drones, (err, docs) => {
    if (err) {
      throw err;
    }
  
    docs.forEach((drone) => {
      console.log(drone.name)
    });
    mongoose.connection.close();
  });