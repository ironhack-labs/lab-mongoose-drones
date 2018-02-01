// Iteration #1
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/drones-dev");
const Drone = require("../models/drone");

const drones = [
  {
    name: "Riri",
    propellers: 2,
    maxSpeed: 10
  },
  {
    name: "Fifi",
    propellers: 3,
    maxSpeed: 12
  },
  {
    name: "Loulou",
    propellers: 4,
    maxSpeed: 15
  }
];

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach(drone => {
    console.log(drone.name);
  });
  mongoose.connection.close();
});
