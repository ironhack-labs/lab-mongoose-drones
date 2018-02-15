// Iteration #1
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require("../models/drone")

const drones = [
    {
      name: "Silver Surfer",
      propellers: 4,
      maxSpeed: 100,
    },
    {
        name: "The Tittler",
        propellers: 8,
        maxSpeed: 120,
    },
    {
        name: "Hodor",
        propellers: 12,
        maxSpeed: 140,
    }
  ];

  Drone.create(drones, (err, docs) => {
    if (err) {
        throw err;
    }
    docs.forEach((drone) => {
      console.log(drone.name);
    });
    mongoose.connection.close();
});