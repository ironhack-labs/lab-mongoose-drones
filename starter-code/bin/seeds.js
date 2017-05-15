// Iteration #1
/*jshint esversion: 6*/

const mongoose = require('mongoose');
let DroneModel = require("../models/drone");
mongoose.connect('mongodb://localhost/drones');

const droneData = [
  {
    droneName: "Millenary Falcon",
    propellers: 4,
    maxSpeed: 100
  },
  {
    droneName: "Nostromo",
    propellers: 1,
    maxSpeed: 50
  },
  {
    droneName: "Enterprise",
    propellers: 2,
    maxSpeed: 150
  }
];


DroneModel.create(droneData, (err, docs)=>{
  if (err) {
    throw err;
  }
  docs.forEach((drone) => {
    console.log(drone.droneName);
  });
  mongoose.connection.close();
});
