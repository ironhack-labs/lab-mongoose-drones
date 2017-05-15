/*jshint esversion: 6*/


const mongoose = require('mongoose');

const Drone = require('../models/drone');

mongoose.connect('mongodb://localhost:27017/drones');

const drones = [
  {
    droneName: 'Amazon',
    propellers: 4,
    maxSpeed: 60
  },

  {
    droneName: 'Google',
    propellers: 7,
    maxSpeed: 70
  },

  {
    droneName: 'Ups',
    propellers: 4,
    maxSpeed: 40
  }

];

Drone.create(drones, (err, docs)=>{
  if(err) {
    throw err;
  }
  docs.forEach((drone)=>{
    console.log(drone.droneName);
  });
  mongoose.connection.close();
});
