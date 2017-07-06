// Iteration #1
const Drone = require('../models/Drone');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pairsDrones')
  .then(() => {
    let drones = [
      {
        droneName: 'Drone Alpha',
        propellers: 4,
        maxSpeed: 30,

      },
      {
        droneName: 'Drone Beta',
        propellers: 6,
        maxSpeed: 50,
      },
      {
        droneName: 'Drone Gamma',
        propellers: 2,
        maxSpeed: 20,
      },
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
