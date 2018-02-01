// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/drone.js");

mongoose.connect("mongodb://localhost/drones-dev").then(() => console.log("Conectado"));

const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
]

Drone.collection.drop();

drones.forEach( d => {
  let dr = new Drone(d);
  dr.save((err, dron) => {
    if(err){
      throw err;
    }
    console.log(`Producto guardado ${dron.name}`);
   // mongoose.disconnect();
  })
});
