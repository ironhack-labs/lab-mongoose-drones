// Iteration #1

const mongoose = require ('mongoose');
const Drone = require('../models/Drone');

mongoose.connect('mongodb://localhost/drones-dev', {useMongoClient: true});

const drones = [
  {droneName: "Miguel",
  propellers: 4,
  maxSpeed: 8,
  },
  {droneName: "Andrei",
  propellers: 5,
  maxSpeed: 5,
},
  {droneName: "Victor",
  propellers: 3,
  maxSpeed: 10,
}];


Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(drones => console.log(drones.droneName));
  mongoose.connection.close();
});
