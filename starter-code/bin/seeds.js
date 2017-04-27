const mongoose = require('mongoose');
const Drone = require('../models/drone');

mongoose.connect("mongodb://localhost:27017/drones-dev");



let drones = [
  {droneName: "Drone1",
  propellers: 4,
  maxSpeed: 60,
  },
  {droneName: "Drone2",
  propellers: 2,
  maxSpeed: 30,
  },
  {droneName: "Drone3",
  propellers: 8,
  maxSpeed: 80,
  }
]// Iteration #1

Drone.create(drones, (err, docs)=> {
  if(err) { throw err}
  docs.forEach((drone) => {
    console.log(drone.droneName);
})

mongoose.connection.close();

});
