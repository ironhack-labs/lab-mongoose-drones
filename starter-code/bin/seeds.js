// bin/seeds.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev', {useMongoClient: true});
const Drone = require('../models/drones');
// Iteration #1



const drones = [
  {
    droneName       : 'Cristian',
    propellers      : 5,
    maxSpeed   : 10,

  },
  {
    droneName       : 'Alberto',
    propellers      : 5,
    maxSpeed   : 10,
  },
  {
    droneName       : 'Thor',
    propellers      : 15,
    maxSpeed   : 50,
  }
];
//Borrar antes de crear-->Es lo que deberíamos hacer.
Drone.collection.drop();
// bin/seeds.js
Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((drone) => {
    console.log(drone.droneName)
  });
  mongoose.connection.close();
});
