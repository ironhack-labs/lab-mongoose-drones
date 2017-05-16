const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lab-drones');

const Drone = require ('../models/drone.js');

// Iteration #1
const dronesInfo = [
  {
    droneName: "Pchela-1",
    propellers: 1,
    maxSpeed: 50,
    imageUrl: '/images/bee-drone.jpg'
  },
  {
    droneName: "Scat",
    propellers: 0,
    maxSpeed: 223,
    imageUrl: '/images/scat.jpg'
  },
  {
    droneName: "Zala",
    propellers: 1,
    maxSpeed: 33,
    imageUrl: '/images/zala.jpg'
  }
];
// db.lab-drones.insertMany()
Drone.create(dronesInfo, (err, dronesDocs) => {
  if (err) {
    throw err;
  }

  dronesDocs.forEach((oneDrone) => {
    console.log(`NEW DRONE ${oneDrone.droneName} -> ${oneDrone._id}`);
  });
  mongoose.connection.close();
});
