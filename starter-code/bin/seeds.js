// Iteration #1

const Drone = require("../models/drones").Drone;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/drones-dev");

const droneData = [
  { droneName: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { droneName: "Racer 57", propellers: 4, maxSpeed: 20 },
  { droneName: "Courier 3000i", propellers: 6, maxSpeed: 18 },
  { droneName: "Cristian", propellers: 8, maxSpeed: 99 }
];

droneData.forEach((el, ix) => {
  Drone.create(el, (err, drone) => {
    if (err) {
      return handleError(err);
    }
  });
});

mongoose.disconnect();
