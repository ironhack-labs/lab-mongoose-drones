// Iteration #1
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/drones-dev');


const Drone = require('../models/drone.js');


const drones = [
  { droneName: 'Creeper XL 500', propellers: 3, maxSpeed: 12,description: "flying drone 1", imageUrl:'../images/prime-drone.jpg' },
  { droneName: 'Racer 57', propellers: 4, maxSpeed: 20, description: "flying drone 2", imageUrl:'../images/prime-drone.jpg' },
  { droneName: 'Courier 3000i', propellers: 6, maxSpeed: 18 , description: "flying drone 3", imageUrl:'../images/prime-drone.jpg'}
];


  // db.drones.insertMany()
Drone.create(drones, (err, droneDocs) => {
  if (err) {
    throw err;
  }

  droneDocs.forEach((oneDrone) => {
    console.log(`NEW DRONE ${oneDrone.imageUrl} -> ${oneDrone._id}`);
  });
  mongoose.disconnect();
});
