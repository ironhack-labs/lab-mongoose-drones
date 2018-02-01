// Iteration #1
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/drones-dev");

const Drone = require("../models/drone");

const drones = [
  {
    name: "drone1",
    propellers: 4,
    maxSpeed: 40
  },
  {
    name: "drone2",
    propellers: 8,
    maxSpeed: 80
  },
  {
    name: "drone3",
    propellers: 5,
    maxSpeed: 50
  }
];

Drone.create(drones, (err, docs) => {
  if (err) {
    next(err);
  }

  docs.forEach(drone => {
    console.log(drone.name);
  });
  mongoose.connection.close();
});
