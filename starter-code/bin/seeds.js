const mongoose = require('mongoose');

require ('../config/db.config');

const Drone = require ('../models/drone');

const drones = [
  {
    name: "Phantom 1" ,
    propellers: 4 ,
    maxSpeed: 50,
  },
  {
    name: "Phantom 2" ,
    propellers: 6,
    maxSpeed: 70,
  },
  {
    name: "Phantom 3" ,
    propellers: 8,
    maxSpeed: 100,
  }
];

Drone.create(drones).then((data) => {
    data.forEach((element) => {
      console.log(element.name);
    });
    mongoose.connection.close(); //duda qué hace
});
