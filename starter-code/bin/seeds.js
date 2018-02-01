// Iteration #1
const mongoose = require('mongoose');
const Drones = require('../models/Drones');


mongoose.connect('mongodb://localhost/drones-dev').then(() => console.log("Conectado!"));


const droneData = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];
const newDrones = new Drones (droneData);
module.exports = Drones;

droneData.forEach(p => {
    let dr = new Drones(p);
    dr.save((err, dron) => {
        if (err) {
            throw err;
        }
        console.log(`Dron guardado ${dron.name}`)
    })
});

setTimeout(() => {
    mongoose.disconnect();
  }, 1000);
