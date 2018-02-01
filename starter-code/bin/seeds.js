// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/drones");
//mongoose.connect("mongodb://localhost/drones-dev");

const droneData = [
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

droneData.forEach(droneObject => {
  mongoose.connect("mongodb://localhost/drones-dev");

  Drone.create(droneObject, (err, drone) => {
    if (err) {
      throw err;
    }
    console.log(drone.name);

    mongoose.connection.close();
  });
});

// setTimeout(() => {
//   mongoose.connection.close();
// });
