const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/drones-dev");

var Drone = require("../models/drone.js");

let dronesCreated = [];
Drone.create({ name: "HenriMAX", propellers: 16, maxSpeed: 40 }, function(
  err,
  i
) {
  if (err) console.error(err);
  else {
    console.log("saved");
  }
});
console.log("after");

Drone.create({ name: "HenriMID", propellers: 12, maxSpeed: 30 }, function(
  err,
  i
) {
  if (err) console.error(err);
  else {
    console.log("saved");
  }
});

Drone.create({ name: "HenriMin", propellers: 9, maxSpeed: 20 }, function(
  err,
  i
) {
  if (err) console.error(err);
  else {
    console.log("saved");
    mongoose.connection.close();
  }
});
