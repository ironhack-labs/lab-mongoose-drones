// Iteration #1
/*jshint esversion:6*/
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drone-dev');
const drone = require('../models/drone');

const drones = [{
  droneName: "ModelA",
  propellers: 4,
  maxSpeed: 80,
},
{
  droneName: "ModelB",
  propellers: 6,
  maxSpeed: 60
},
{
  droneName: "ModelC",
  propellers:3,
  maxSpeed: 70
}];

// bin/seeds.js

// bin/seeds.js
drone.create(drones, (err, docs) => {
  if (err) {
     throw err;
    }
  docs.forEach( (drones) => {
    console.log(drones);
  });
  mongoose.connection.close();
});
