// Iteration #1
const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost/drones-dev';
const Drone = require('../models/drone');

mongoose.connect(dbURL).then(() => console.log('Conectado!!!'));

const droneData = [
    { name: 'Marc XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Victor 57', propellers: 4, maxSpeed: 20 },
    { name: 'Yaiza 3000i', propellers: 6, maxSpeed: 18 }
  ];

Drone.collection.drop();

droneData.forEach(d => {
    let element = new Drone(d);
    element.save((err)=>{
        if(err){
            throw err;
        }console.log('Drone guardado');
    })
});
