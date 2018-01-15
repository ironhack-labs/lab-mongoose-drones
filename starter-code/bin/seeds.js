const mongoose = require('mongoose');

require ('../config/db.config');

const Drone = require ('../models/drone');

const drones = [
  {
    name: "Creeper XL 500" ,
    propellers: 3 ,
    maxSpeed: 12,
  },
  {
    name: "Racer 57" ,
    propellers: 4,
    maxSpeed: 20,
  },
  {
    name: "Courier 3000i" ,
    propellers: 6,
    maxSpeed: 18,
  }
];

Drone.create(drones).then((data) => {
    data.forEach((element) => {
      console.log(element.id);
    })
    // how do I check the error? with the following code it does not work
    //.catch((err) => {
    //  console.log(err);
    //})
    ;
    mongoose.connection.close(); //duda qué hace
});
