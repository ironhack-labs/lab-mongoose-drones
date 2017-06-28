// Iteration #1
const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost/lab-mongoose-drones");

const droneWhenInRome = require("../models/drone-model.js");

const droneInfoArray = [
  {
    droneName: "Ceasar",
    propellers: 8,
    maxSpeed: 40
  },
  {
    droneName: "Brutus",
    propellers: 6,
    maxSpeed: 35
  },
  {
    droneName: "Zeus",
    propellers: 10,
    maxSpeed: 50
  }
];

droneWhenInRome.create(
  droneInfoArray,           //1st arg = array of product info objects
  (err, droneResults) => {  //2nd arg = callback!
      if (err) {
        console.log ("WRONG! Struck by lightning!");
        return;
      }
      droneResults.forEach((oneDrone) => {
        console.log("New Drone! " + oneDrone.droneName);
      });
  }
);
