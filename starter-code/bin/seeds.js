// Iteration #1

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-example-develoment', {useMongoClient: true});
const Drone = require('../models/drone');


// droneName, propellers and maxSpeed
const drones = [
  {
droneName: "3point0.2"
    propellers:  10,
    maxSpeed:120,
  },
  {
    droneName: "the_dude"
        propellers:  4,
        maxSpeed:12,
  },
  {
    droneName: "power_ranger_el_blanco"
        propellers:  20,
        maxSpeed:240,
  }
];

// create method
Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((drone) => {
    console.log(drone.droneName)
  });
  mongoose.connection.close();
});
