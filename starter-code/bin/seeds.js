// Iteration #1
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/lab-drones');

const Drone=require('../models/drone.js');

const drones = [
  {
    droneName:'Inspire 2',
    propellers:4,
    maxSpeed :67
  },
  {
    droneName:'XFold Dragon X12',
    propellers:12,
    maxSpeed: 75
  },
  {
    droneName:'Gemo Copter',
    propellers:4,
    maxSpeed: 117
  }
];

Drone.create(drones,(err,docs) => {
  if(err){
    console.log('Dang! Error when running the seed file.')
    return;
  }

  docs.forEach((oneDoc)=>{
    console.log(`${oneDoc.droneName} -> ${oneDoc._id}`);
  });
  mongoose.disconnect();
});
