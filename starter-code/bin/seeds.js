// Iteration #1
const mongoose = require('mongoose');

require ('../config/db.config.js');

const Drone = require ('../models/drone.js');

const drones = [
  {
  name: 'Halcon Milenario',
  propellers: 1 ,
  maxSpeed: 20,
  imageUrl: 'http://e00-marca.uecdn.es/assets/multimedia/imagenes/2017/11/10/15103170397780.jpg'
  },
  {
  name: 'Ala X',
  propellers: 4,
  maxSpeed: 18 ,
  imageUrl: 'https://wallpapercave.com/wp/HiKDtP7.jpg'
  },
  {
  name: 'Apolo 13',
  propellers: 3,
  maxSpeed: 15,
  imageUrl: 'http://www.alanbeangallery.com/apollo13.jpg'
  },
];

Drone.create(drones).then((docs) => {
  docs.forEach((drone) => {
    console.log(drone.name);
  });

  mongoose.connection.close();
});
