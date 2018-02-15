// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone');

const drones = [
    {
     name:"Black-Mist",
     propellers: 24,
     maxSpeed: 5000
    },

    {
     name:"Tropic-Thunder",
     propellers: 55,
     maxSpeed: 4500
    },
    {
     name:"White-Lightning",
     propellers: 100,
     maxSpeed: 10000
    }
]

Drone.create(drones, (err, docs) => {
 if (err) {
   throw err
 }
//  docs.forEach((drone) => {
//     console.log(drone.name)
//  })
mongoose.connection.close();
})