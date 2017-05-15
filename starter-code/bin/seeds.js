// Iteration #1
const mongoose = require('mongoose');
let Drone = require('../models/drones');


//mongoose.connect(config.DBURL);
mongoose.connect("mongodb://localhost/dronesdb");


const drones = [
  {
    droneName: "Halcón Milenario",
    propellers: 4,
    maxSpeed: 18
  },
  {
    droneName: "Enterprise",
    propellers: 8,
    maxSpeed: 25
  },
  {
    droneName: "Planet Express",
    propellers: 2,
    maxSpeed: 12
  }
];


Drone.collection.drop();

Drone.create(drones, (err,docs) => {

  if(err){
    throw err;
  }

  /*docs.forEach((drone) => {
    console.log(drones);
  });*/

  console.log(drones);


  mongoose.connection.close();

});
