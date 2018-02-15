// Iteration #1
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/drones-dev");

const Drone = require("../models/Drone.js")
const droneData = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.collection.drop() //para asegurarme que tire todo lo de seeds antes de meter mas cosas

Drone.create(droneData,(err,result)=>{
    console.log("result");
    mongoose.connection.close()
})