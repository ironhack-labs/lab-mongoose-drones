// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drones').Drone;



mongoose.connect('mongodb://localhost/drones-dev');

const droneData = [{
    droneName: 'clara XL 20',
    propellers: 2,
    maxSpeed: 10
  },
  {
    droneName: 'david Racer 25',
    propellers: 4,
    maxSpeed: 19
  },
  {
    droneName: 'tiago courier 18',
    propellers: 8,
    maxSpeed: 14
  }
];

Drone.create(droneData, (err, docs) => {
  if (err) {
    console.log("error: ", err);
  } else {
    console.log(doc);
  }
  mongoose.disconnect();
});

// open database, create object,
