// Iteration #1
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/drones-dev");

// Linked to the "module.exports = Product" line in product js.
const Drone = require("../models/drone");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(drone => {
    console.log(drones.name);
  });
  mongoose.connection.close();
});
