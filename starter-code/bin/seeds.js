const mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost/drones-dev");

// Iteration #1

const Drone = require("../models/Drone.js");
const droneData = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.collection.drop();

Drone.create(droneData, (err, result) =>{
  console.log(result);
  mongoose.connection.close();

});

