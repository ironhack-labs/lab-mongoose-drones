const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drone-lab', {useMongoClient: true});
const Drone = require('../models/drone');

const sebastian = [
  {
    droneName: "Yurema",
    propellers: 5,
    maxSpeed: 100,
  },
  {
    droneName: "Juan",
    propellers: 4,
    maxSpeed: 200,
  },
  {
    droneName: "Victor",
    propellers: 3,
    maxSpeed: 300,
  }
];

Drone.create(sebastian, (err, docs) => {
  if (err) {
    throw err;
  }
  mongoose.connection.close();
});
