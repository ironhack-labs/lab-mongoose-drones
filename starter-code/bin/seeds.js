// Iteration #1

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/drone-db', {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useMongoClient: true
});

const Drone = require('../models/drone');

//array of objects
const drones = [
    {
        name: 'Oscar',
        propellers: 2,
        maxSpeed: 22,
    },
    {
        name: 'Rodrigo',
        propellers: 4,
        maxSpeed: 10,
    },
    {
        name: 'Matt',
        propellers: 3,
        maxSpeed: 20,
    }
];

Drone.create(drones, (err, docs) => {
    if(err){
        throw err;
    }

    docs.forEach((drone) =>{
        console.log(drone.name);
    });
    mongoose.connection.close();
});