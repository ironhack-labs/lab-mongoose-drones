const mongoose = require("mongoose");
const Drone = require("../models/drone").Drone;

mongoose.connect("mongodb://localhost/dronedb");

// Iteration #1
const droneData = 
 [{
  droneName: "firstDrone", 
  propellers: 100, 
  maxSpeed: 100
},
{
  droneName: "secondDrone", 
  propellers: 200, 
  maxSpeed: 200
},
{
  droneName: "thirdDrone", 
  propellers: 300, 
  maxSpeed: 300
}
 ];

Drone.create(droneData, function(err, docs){
  if(err){
    console.log(err);
  } else {
    console.log('Drone created!');
  }
  mongoose.disconnect();
});