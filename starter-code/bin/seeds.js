/* jshint esversion: 6 */
// Iteration #1

const mongoose = require('mongoose');
const Drone = require('../models/drone');
mongoose.connect('mongodb://localhost/drones-dev');


const drones = [

  {
    droneName: "maverick",
    propellers: 4,
    maxSpeed: 160
  },
  {
    droneName: "lucas",
    propellers: 0,
    maxSpeed: 0
  },
  {
    droneName: "alfred",
    propellers: 12,
    maxSpeed: 999
  },

  { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.create(drones, (err, docs) => {
  if(err) { throw err; }
  docs.forEach((drone) =>{
    console.log(drone.droneName);
  });
  mongoose.connection.close();
});
