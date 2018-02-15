// Iteration #1

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require("../models/Drone.js");

const droneData = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

//Limpia la colección de drones
Drone.collection.drop();

Drone.create(droneData, (err,result) => {
    result.forEach((drone) => console.log(`El drone ${drone} ha sido agregado exitosamente`));
    mongoose.connection.close();
});

