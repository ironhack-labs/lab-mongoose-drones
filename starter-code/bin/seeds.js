// Iteration #1
'use strict';

const mongoose = require("mongoose");
const Drone = require('../models/Drone').Drone;

mongoose.connect('mongodb://localhost/drones-dev');

const droneData = [
    { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.create(droneData, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log('YEEEAH! We feed our DBS');
    }

});
