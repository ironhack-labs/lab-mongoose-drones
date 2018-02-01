// Iteration #1

const Drone = require('../models/drone');
const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/drones-dev', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
});

const droneData = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

Drone.create(droneData, (err, result) => {
    if (err) {
        throw err;
    }
    else {
        console.log(result);
        // result.forEach(element => {
        //     console.log(element);
        // })
    }
    mongoose.connection.close();
})

