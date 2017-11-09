'use strict';
// Iteration #1


const Drone = require("../models/drone").Drone;

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/drones');

const droneData = [{
          droneName: "R2D2",
          propellers: 4,
          maxSpeed: 20,
     },
     {
          droneName: "C3PO",
          propellers: 8,
          maxSpeed: 25,
     },
     {
          droneName: "BB8",
          propellers: 4,
          maxSpeed: 15,
     },
];

Drone.create(droneData, (err, res) => {
     if (err) {
          console.log(err);
     } else {
          console.log(res);
     }
});


//mongoose.connect.close();
