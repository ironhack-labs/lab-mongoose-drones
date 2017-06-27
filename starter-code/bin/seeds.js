const mongoose = require('mongoose');
mongoose.connect('mongodb://localHost/drones-dev'); // database: drones-dev
//Import Drone model
const Drone = require("../models/droneModel.js");

const initialDrones = [
  {droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12},
  {droneName: 'Racer 57', propellers: 4, maxSpeed: 20},
  {droneName: 'courier 3000i', propellers: 6, maxSpeed: 18}
];

Drone.create(initialDrones,(err, results) =>{
  if(err) {
      console.log("database not saved -ERROR");
      return;
  }
  // results.forEach((drone) =>{
  //   console.log("New drone " + drone.droneName);
  // });z
});
