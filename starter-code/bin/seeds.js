// Iteration #1
// SSED FILE - A JS file that saves things to your database when you run it
//(makes onboarding easier and it allows you to recreate old data in your DB after you delete things (by accident or on purpose).)

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drnz');

// We have to connect the DB again here because seed.js is SEPARATE from app.js

const Drone = require('../models/drone-model.js');
// ^^ connecting the Product schema to the actual creation of objects
const drones = [
    { droneName: 'Carl XL 500', propellers: 3, maxSpeed: 12 },
     { droneName: 'Remy 57', propellers: 4, maxSpeed: 20 },
     { droneName: 'Jim 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.create(
  drones,               // 1st argument -> array of product info objects
  (err, dronesArray) => {      // 2nd argument -> callback!
    if (err){
      console.log("OMG! Database error.");
      return;
    }
    dronesArray.forEach((oneDrone) => {
      console.log("New Drone! " + oneDrone.droneName);
    });
  }
);

mongoose.disconnect();
