// Iteration #1
const mongoose = require ('mongoose');
const Drone = require ('../models/Drone');
const {dbURL} = require ('mongodb://localhost/drones-dev');

//mirar aqui

mongoose.connect (dbURL, {useMongoClient: true});

const droneData = [
  { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
]


Drone.create (droneData,(err,docs)=> {
  if(err) {
    throw err;
  }
  docs.forEach(d => console.log(d.name));
  mongoose.connection.close();
})
