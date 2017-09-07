const mongoose = require('mongoose');
const Drone = require('../models/Drone');
const {dbURL} = require('../config/db');

mongoose.connect(dbURL, {useMongoClient: true});

const drone = [{droneName: "Santi", propellers: 4, maxSpeed: 18}];

Drone.create(drone, (err, docs) => {
  if(err) {
    throw err;
  }
  docs.forEach(d => console.log(d));
  mongoose.connection.close();
});
