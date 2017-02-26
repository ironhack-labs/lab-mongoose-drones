// Iteration #1
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/ironshopDev');
mongoose.connect('mongodb://localhost/drones');

// const Product = require('../models/product.js');
const Drone = require('../models/drone.js');

// const products = [
const drones = [

  {
    name: 'DJI Phantom 4',
    maxSpeed: 44.74, //mph
    propellers: 4
  },
  {
    name: 'DJI Mavic Pro: The Smart Foldable Drone',
    maxSpeed: 40, //mph
    propellers: 4
  },
  {
    name: 'GoPro Karma: Explore Now',
    maxSpeed: 35, //mph
    propellers: 4
  }
];

  // db.products.insertMany([...])
  //                  |
  //      -------------
  //      |
Drone.create(products, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((oneProduct) => {
    console.log(`${oneProduct.name} ${oneProduct._id}`);
  });

  mongoose.disconnect();
});
