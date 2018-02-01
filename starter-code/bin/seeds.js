const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/drones-dev");
const Drone = require("../models/drone");

// Iteration #1
const drones = [
  {
    name: "name1",
    propellers: 5,
    maxSpeed: 0
  },
  {
    name: "name2",
    propellers: 0,
    maxSpeed: 5
  },
  {
    name: "name3",
    propellers: 6,
    maxSpeed: 3
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
