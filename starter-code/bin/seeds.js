// Iteration #1
const mongoose = require('mongoose');
const dbURL ='mongodb://localhost/drones-dev';
const Drone = require('../models/Drone');

mongoose.connect(dbURL);

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }

  ];

  Drone.collection.drop();
  
  drones.forEach(dron => {
    let dr = new Drone(dron);
    dr.save((err,drn) =>{
        if(err){
            throw err;
        }
        console.log(`Drone guardado ${drn._id}`);
    })
  })

//   mongoose.disconnect(); 