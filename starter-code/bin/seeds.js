// Iteration #1
///seeds is what saves the data into your database
const mongoose = require('mongoose');

//this is also in app.js since we are using the same database
mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone-model.js');


const drones = [
  {
    droneName: 'Mavic Pro',
    propellers: 4,
    maxSpeed: 40
  },
  {
    droneName: 'UPair FPV Drone',
    propellers: 3,
    maxSpeed: 10
  },
  {
    droneName: 'GoPro Karma',
    propellers: 8,
    maxSpeed: 30
  }
];


  // db.products.insertMany()
Drone.create(drones, (err, droneDoc) => {
  if (err) {
    throw err;
  }

  droneDoc.forEach((oneDrone) => {
    console.log(`NEW PRODUCT ${oneDrone.droneName} -> ${oneDrone._id}`);
  });

  mongoose.disconnect();

});
