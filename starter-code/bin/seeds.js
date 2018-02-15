// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev', {useMongoClient: true});
const Drone = require('../models/drone');


const drones = [
{
  name: "Drone 1",
  propellers: 4,
  maxSpeed: 18
},
{
  name: "Drone 2",
  propellers: 6,
  maxSpeed: 25
},
{
  name: "Drone 3",
  propellers: 2,
  maxSpeed: 10
},
]

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((drone) => {
    console.log(drone.name)
  });
  mongoose.connection.close();
});