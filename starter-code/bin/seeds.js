// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-app');

const Drone = require('../models/drone');

const droneData = [
  { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.create(droneData,(err, droneData)=>{
    if(err){
        throw err;
    }
    droneData.forEach((drone)=>{
        console.log(drone.name);
    })

    mongoose.connection.close();

})