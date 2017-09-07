// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/drones.js');
const {dbURL}= require('../config/db');

mongoose.connect(dbURL);

const drones = [
  {
    droneName : 'General Atomics MQ-9 Reaper',
    propellers: 4,
    maxSpeed: 18
  },
  {
    droneName : 'Alvars drone',
    propellers: 7,
    maxSpeed: 23
  },
  {
    droneName : 'Lucas drone',
    propellers: 3,
    maxSpeed: 45

  }
];

Drone.create(drones,(err,docs)=>{
  if(err){
    throw err;
  }
  docs.forEach(d=> console.log(d.droneName));
  mongoose.connection.close();
});
