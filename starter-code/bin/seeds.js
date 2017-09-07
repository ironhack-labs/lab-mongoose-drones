// Iteration #1

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone');

const droneData = [
  { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { droneName: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];

Drone.create(droneData, (error, docs) => {
    if (error) {
      console.log(error);
    } else {
      console.log(docs);
    }
    mongoose.disconnect();
});

// var Cat = mongoose.model('Cat', { name: String });
// var kitty = new Cat({ name: 'Ironhacker' });
