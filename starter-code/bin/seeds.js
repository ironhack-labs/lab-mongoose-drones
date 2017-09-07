// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dronedb', {useMongoClient: true});
const Drone = require('../models/drone')

const drone = [
    {
        droneName: "Tardis",
        propellers: 4,
        maxSpeed: Infinity
    },
    {
        droneName: "Delorean",
        propellers: 1,
        maxSpeed: 88
    },
    {
        droneName: "Serenity",
        propellers: 8,
        maxSpeed: 300
    }
]

Drone.create(drone, (err, docs) => {
    if (err) {
        throw err;
    }
    docs.forEach((drone) => {
        console.log(drone.droneName);
    
    });
    mongoose.connection.close();
})