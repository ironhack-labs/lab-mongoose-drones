// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone');

mongoose.connect('mongodb://localhost/drones-dev').then(() => console.log("Conectado con Seeds!"));

const drones = [
    {
        name : "Millenium Falcon",
        propellers : 2,
        maxSpeed : 20,
    },
    {
        name : "Air Force One",
        propellers : 4,
        maxSpeed : 25,
    },
    {
        name : "Larry Bird",
        propellers : 8,
        maxSpeed : 10,
    }
];

Drone.collection.drop();

drones.forEach( p => {
    let dr = new Drone(p);
    dr.save((err,dron) =>{
        if (err){
            throw err;
        }
        console.log (`Dron guardado ${dron.name}`)
    })
});

setTimeout( function () {
    mongoose.disconnect();
  }, 1000);
