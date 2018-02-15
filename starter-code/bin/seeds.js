const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');
const Drone = require('../models/drone');

const drones = [
  {
    name: 'Terminus',
    propellers: 8,
    maxSpeed: 20,
  },
  {
    name: 'Optimus Fries',
    propellers: 10,
    maxSpeed: 18,
  },
  {
    name: 'lolwut',
    propellers: 5,
    maxSpeed: 22,
  },
];

Drone.create(drones, (err, docs) => {
  if (err) throw err;

  docs.forEach(doc => console.log(doc));
  mongoose.connection.close();
});
