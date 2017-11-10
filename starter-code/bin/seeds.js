// Iteration #1
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/drones-dev',{ useMongoClient: true});
const Drone = require("../models/drone");
const drones = [
  {
    droneName: "Thor",
    propellers: 4,
    maxSpeed: 100
  },
  {
    droneName: "Loky",
    propellers: 6,
    maxSpeed: 150
  },
  {
    droneName: "Marc",
    propellers: 8,
    maxSpeed: 200
  }
];

Drone.collection.drop();

Drone.create(drones, (err, docs)=> {
  if (err){
  throw err;
  }
  docs.forEach((drone) => {
    console.log(drones)
  });

  mongoose.connection.close();
});


