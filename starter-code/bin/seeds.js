// Iteration #1
/*jshint esversion: 6 */

const Drone = require('../models/drone');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev')
  .then(() => {
    let drones = [
      {
        droneName: 'Drone1',
        propellers: 1,
        maxSpeed: 5,
      },
      {
        droneName: 'Drone2',
        propellers: 2,
        maxSpeed: 10,
      },
      {
        droneName: 'Drone3',
        propellers: 3,
        maxSpeed: 15,
      },
    ];

    let droneObj = drones.map( p => new Drone(p));

    droneObj.forEach( p => p.save( (err, obj) =>{
      if(err){
        console.log(err);
      }else{
        console.log(`New drone created [${obj.droneName}] with ID:${obj._id}`);
      }
    }));

    //mongoose.connection.close();
  });
