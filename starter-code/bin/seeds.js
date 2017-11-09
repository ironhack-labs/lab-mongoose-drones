const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev', {useMongoClient: true});
const Dron = require('../models/drone');


const drone = [
  {
    droneName : "Manu",
    propeller : 4,
    maxSpeed: 100,
  },

  {
    droneName : "Gema",
    propeller : 2,
    maxSpeed: 120,
  },
];

Dron.collection.drop();

Dron.create(drone, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((dron) => {
    console.log(dron.droneName)
  });
  mongoose.connection.close();
});
