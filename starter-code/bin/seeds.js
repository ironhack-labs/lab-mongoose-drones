// Iteration #1
const Drone = require('../models/Drone');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/drones-dev')
  .then(() => {
    let drones = [
      { droneName: 'Dronify', propellers: 1, maxSpeed: 18 },
      { droneName: 'Super Comet Dron', propellers: 4, maxSpeed: 27 },
      { droneName: 'Master Cool Pro Droning', propellers: 2, maxSpeed: 21 },
    ];

    let droneObj = drones.map( e => new Drone(e));

    droneObj.forEach( e => e.save( (err, obj) =>{
      if(err){
        console.log(err);
      }else{
        console.log(`New drone created [${obj.droneName}] with ID:${obj._id}`);
        // if(drones.length - 1 == e){
        //   console.log("ended connection");
        //   mongoose.connection.close();
        // }
      }
    }));
  });
