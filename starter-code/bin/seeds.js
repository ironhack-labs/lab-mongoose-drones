// Iteration #1
const mongoose = require('mongoose');
require('../config/db.config');

const Drone = require('../models/drone.model');

const drones = [
    {
        name: "Drone 1",
        propellers: 2,
        maxSpeed: 234
    },
    {
        name: "Drone XL",
        propellers: 23,
        maxSpeed: 3333
    },
    {
        name: "Antodrone",
        propellers: 24,
        maxSpeed: 5000
    }
];

Drone.create(drones).then((docs) => {
    docs.forEach((drone) => {
        console.log(drone.name);
    });

    mongoose.connection.close();
});

