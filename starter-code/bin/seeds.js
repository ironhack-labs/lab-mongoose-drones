// Iteration #1

const mongoose = require("mongoose");
const { dbUrl } = require("../config");
const Drone = require("../models/Drone");

mongoose.connect(dbUrl).then(() => console.log("conection"));

// const drones = [
//     {
//         name: 'paquito',
//         propellers: 4,
//         maxSpeed: 40
//     },
//     {
//         name: "Beltran",
//         propellers: 5,
//         maxSpeed: 45
//     },
//     {
//         name: 'Jesus',
//         propellers: 6,
//         maxSpeed: 50
//     },
//     {
//         name: 'maquito',
//         propellers: 7,
//         maxSpeed: 70
//     },

// ];




Drone.collection.drop();

drones.forEach(d => {
    let dr = new Drone(d);
    dr.save((err, drone) => {
        if (err) {
            throw err;
        }
        console.log("drone guardado");
    })
})

