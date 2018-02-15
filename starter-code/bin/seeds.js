// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev', {useMongoClient: true});

//linked to the "module.exports = Products" line
//in products.js
const Drone = require('../models/drone');



// maybe change droneData to drones.
const droneData = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  // save fake products to database
  Drone.create(droneData, (err, docs) => {
    if (err) {
      throw err;
    }
  
    docs.forEach((drone) => {
      console.log(drone.name)
    });
    mongoose.connection.close();
  });