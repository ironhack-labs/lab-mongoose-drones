const mongoose = require("mongoose");
const Drone = require("../models/drone").Drone;

mongoose.connect("mongodb://localhost/drones-dev");

const droneData = [
  { droneName: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { droneName: "Racer 57", propellers: 4, maxSpeed: 20 },
  { droneName: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

Drone.create(droneData, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
    mongoose.connection.close();
  }
});
