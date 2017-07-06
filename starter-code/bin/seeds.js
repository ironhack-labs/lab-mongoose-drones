// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/drones-dev');
const Drone = require('../models/drone');


const drones = [
    { droneName : "Millenium Falcon",
      propellers : 16,
      maxSpeed: 2000
    },
    { droneName : "Tie Fighter",
        propellers : 8,
        maxSpeed: 500
    },
    { droneName : "Death Star",
        propellers : 32,
        maxSpeed: 2100
    },
]

Drone.create(drones, (err, drones) => {
    if (err){
        console.log("bigg err");
    } 
    drones.forEach((drone) => {
        console.log(drones.droneName);
    });
    mongoose.connection.close();
})