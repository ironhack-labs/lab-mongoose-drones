// Iteration #1
const Drone = require('../models/drone');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev')
  .then(() => {
    let drones = [
      { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
      { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
      { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
    ];

    let droneObj = drones.map( d => new Drone(d));

    droneObj.forEach( d => d.save( (err, obj) =>{
      if(err){
        console.log(err);
      }else{
        console.log(`New drone created [${obj.droneName}] with ID:${obj._id}`);
      }
    }));

    //mongoose.connection.close();
  });
