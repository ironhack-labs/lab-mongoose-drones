// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');
const Drone = require('../models/drone.js');

// const products = [
const drones = [
  {
    droneName: 'DJI Phantom 4',
    maxSpeed: 44.74, //mph
    propellers: 4
  },
  {
    droneName: 'DJI Mavic Pro: The Smart Foldable Drone',
    maxSpeed: 40, //mph
    propellers: 4
  },
  {
    droneName: 'GoPro Karma: Explore Now',
    maxSpeed: 35, //mph
    propellers: 4
  }
];

  // db.products.insertMany([...])
  //                  |
  //      -------------
  //      |
Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((oneDrone) => {
    console.log(`${oneDrone.droneName} ${oneDrone._id}`);
  });

  mongoose.disconnect();
});
