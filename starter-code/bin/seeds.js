// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lab-drones');

const Drone = require('../models/drone');


const droneData = [
  { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];
debugger
Drone.create( droneData , (err, docs) =>{
  if(err){
    console.log('Error on adding drones to DB');
    return;
  }

  docs.forEach((oneDoc)=>{
    console.log(`${oneDoc.droneName} ${oneDoc._id}`);
  });

  mongoose.disconnect();
});
