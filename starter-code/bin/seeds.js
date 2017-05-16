const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drone');

const Drone = require('../models/drone.js');

const drone = [
  {
    droneName: "Panthon",
    propellers:10,
    maxSpeed:100
},
{
  droneName: "AeroCloud Technology",
  propellers:40,
  maxSpeed:90
},
{
  droneName: "SkyScraperVision",
  propellers:10,
  maxSpeed:50
},{
  droneName: "Raptor Eye",
  propellers:90,
  maxSpeed:150
}

];

Drone.create(drone,(err,dronedocs)=>{
  if (err) {
    throw err;
  }

  dronedocs.forEach((drone) =>{
    console.log(`new product ${drone.droneName}`);
  });


});
