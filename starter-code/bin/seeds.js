// Iteration #1
const mongoose = require('mongoose');

const Drone = require('../models/drone.js');

mongoose.connect('mongodb://localhost/drones-dev').then(()=>{
  let droneData = [
    {
      droneName: "General Atomics",
      propellers: 4,
      maxSpeed: 18

    },
    {
      droneName: "MQ-9",
      propellers: 2,
      maxSpeed: 12

    },
    {
      droneName: "Reaper",
      propellers: 9,
      maxSpeed: 34

    }
  ];
  let droneObj = droneData.map(d => new Drone(d));

  droneObj.forEach(d => d.save((err,obj)=>{
    if(err){
      console.log(err);
    }else {
      console.log(`New drone created [${obj.droneName}]with ID:${obj._id}`);

    }
  }));
// mongoose.connection.close();
});
