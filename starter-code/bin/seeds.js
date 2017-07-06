// Iteration #1
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require("../models/drone");

const drones = [
    {
    droneName: "Ruball",
    propellers: 4,
    maxSpeed: 150
}, 
{
    droneName: "Sonic",
    propellers: 2,
    maxSpeed: 200
}, 
{
    droneName: "Magnum",
    propellers: 6,
    maxSpeed: 250
}
];

Drone.create(drones, (error,docs) => {
    if (error) {
        throw error; 
    }
    docs.forEach(drone => {
        console.log(drone.droneName);
    });
    mongoose.connection.close();
})