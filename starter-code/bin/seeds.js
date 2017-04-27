const mongoose = require('mongoose');
const Drone = require('../models/drone');

mongoose.connect('mongodb://localhost:27017/drones-dev');

const drones = [
  { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.create(drones, (err, docs)=> {

  if(err) { throw err}
  docs.forEach((Drone) => {
    console.log(Drone.droneName);
  })

  mongoose.connection.close();
})