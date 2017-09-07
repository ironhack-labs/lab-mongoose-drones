// Iteration #1



const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones');
const Drone = require('../models/drone');

//seed that will go to schema in models/drone.js for validate with the schema, dataType validation 
const drones = [
  {
    droneName: 'General Atomics MQ-9 Reaper',
    propellers: 4,
    maxSpeed: 18,
  },
  {
    droneName: 'Jordi drone',
    propellers: 4,
    maxSpeed: 18,
  },
  {
    droneName: 'Gabri drone',
    propellers: 4,
    maxSpeed: 18,
  }
];

//create drones from seed to mongo db
Drone.create(drones, (err, drones) => {
  if (err) {
    throw err;
  }

  drones.forEach((drone) => {
    console.log(drone.droneName)
  });
  mongoose.connection.close();
});








