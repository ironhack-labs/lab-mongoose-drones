// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.js');

mongoose.connect('mongodb://localhost/drones-dev');


const droneData = [{
        name: 'Creeper XL 500',
        propellers: 3,
        maxSpeed: 12
    },
    {
        name: 'Racer 57',
        propellers: 4,
        maxSpeed: 20
    },
    {
        name: 'Courier 3000i',
        propellers: 6,
        maxSpeed: 18
    }
];
Drone.collection.drop();

droneData.forEach( drone => {
    let newDrone =  new Drone(drone);
    newDrone.save((err, newSavedDrone)=>{
        if (err){
            throw err;
        }
        console.log(`producto guardado ${newSavedDrone.name}`);
    })
});