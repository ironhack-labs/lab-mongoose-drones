// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones', {useMongoClient:true});
const Drone = require('../models/drone');

const listDrones = [
  {
    droneName : 'Halcon Milenario',
    propellers : 4,
    maxSpeed : 20,
  },
  {
    droneName : 'Phantom 3',
    propellers : 8,
    maxSpeed : 40,
  },
  {
    droneName :'3DR',
    propellers : 2,
    maxSpeed : 5,
  }
];

Drone.collection.drop();

Drone.create(listDrones, (err,docs)=>{
  if(err){
    throw err;
  }
  docs.forEach((droneItem)=>{
    console.log(droneItem.droneName);
  })
})
