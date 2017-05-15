// Iteration #1
/*jshint esversion:6*/
const mongoose = require('mongoose');
const Drone = require ('../models/drone');

mongoose.connect('mongodb://localhost:27017/drones-dev');




const drones = [
  {
    droneName : "Phantom",
    propellers: 4,
    maxSpeed  : 5
  },
  {
    droneName : "Inspire",
    propellers: 6,
    maxSpeed  : 10
  },
  {
    droneName : "Mavic",
    propellers: 4,
    maxSpeed  : 12
  }
];

Drone.create(drones, (err, docs)=>{

  if(err) {throw err}
    docs.forEach((drone) => {
      console.log(drone.droneName);
    });
    mongoose.connection.close();
});
