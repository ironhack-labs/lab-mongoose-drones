// Iteration #1

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone.js');

const drones = [
    {
        droneName: 'Go Pro Karma',
        propellers: 4,
        maxSpeed: 35,
        droneImg: '/images/karma.png'
    },
    {
        droneName: 'Mavic Pro',
        propellers: 4,
        maxSpeed: 40,
        droneImg: '/images/mavic.png'
    },
    {
        droneName: 'Inspire 2',
        propellers: 4,
        maxSpeed: 60,
        droneImg: '/images/inspire.png'
    },
];


Drone.create(drones, (err, droneDocs) =>{
    if(err) {
        throw err;
    }
    droneDocs.forEach((oneDrone) => {
        console.log(`NEW PRODUCT ${oneDrone.droneName} -> ${oneDrone._id}`);
    });
});
