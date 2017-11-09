// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev', {useMongoClient: true});
const Dron = require('../models/drone.js');

droneProducts = [{ droneName: "DJI Phantom 3", propellers: 4, maxSpeed: 20},
                 { droneName: "DJI Phantom 4", propellers: 5, maxSpeed: 50},
                 { droneName: "DJI Phantom 5", propellers: 6, maxSpeed: 70}];

Dron.collection.drop();
// bin/seeds.js
Dron.create(droneProducts, (err, drones) => {
 if (err) {throw err;}

 drones.forEach((product) => {
   console.log(product.droneName);
 });

 mongoose.connection.close();

});
