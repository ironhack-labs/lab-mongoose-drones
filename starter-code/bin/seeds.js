const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone.js');

const droneData = [
  {
    droneName: 'Whiskey',
    propellers: 2,
    maxSpeed: 10
  },
  {
    droneName: 'Tango',
    propellers: 4,
    maxSpeed: 20
  },
  {
    droneName: 'Foxtrot',
    propellers:6,
    maxSpeed: 30
  }

];

//db.product.insterMany()
Drone.create(droneData, (err, droneDocs) => {
  if (err) {
    throw err;
  }

  droneDocs.forEach((oneDrone) => {
    console.log(`NEW DRONE ${oneDrone.droneName} -> ${oneDrone._id}`);
  });

  mongoose.disconnect('mongodb://localhost/drones-dev');
  //FYI, thie disconnect keeps erroring out or someting throws an error when i run :(

});// Iteration #1
