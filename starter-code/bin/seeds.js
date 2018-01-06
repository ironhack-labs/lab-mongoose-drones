// Iteration #1

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');

const drones = [
    {
        name: "Military Drone",
        propellers: 4,
        maxSpeed: 25
    },
    {
        name: "Family Drone",
        propellers: 4,
        maxSpeed: 10
    },
    {
        name: "Racing Drone",
        propellers: 8,
        maxSpeed: 50
    }
]

let Drone = require("../models/drone");

Drone.create(drones, (err, docs) => {
    if (err) {
        console.log("ERROR", err);
    }
    else {
        console.log("SUCCESS", docs);
    }
    mongoose.connection.close();

});