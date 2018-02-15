const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev', {useMongoClient: true});
const Drone = require('../models/Drone');

// Iteration #1
const droneData = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

Drone.create(droneData, (err, docs) => {
    if (err) {
      throw err;
    }
  
    docs.forEach((dro) => {
      console.log(dro.name)
    });
    mongoose.connection.close();
  });
