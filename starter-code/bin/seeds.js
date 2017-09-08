const mongoose = require ('mongoose');
const Drone = require ('../models/drones');
const {dbURL} = require ('../config/db');


mongoose.connect (dbURL, {useMongoClient: true});

const droneList = [
  { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
]


Drone.create (droneList,(err,docs)=> {
  if(err) {
    throw err;
  }
  docs.forEach(d => console.log(d.droneName));
  mongoose.connection.close();
})
