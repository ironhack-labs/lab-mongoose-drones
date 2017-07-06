/*jshint esversion: 6 */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');
const Product = require('../models/products');

// Iteration #1
const products = [
  {
    droneName: 'Djaafar',
    propellers: 4,
    maxSpeed: 30,
  },
  {
    droneName: 'Alex',
    propellers: 2,
    maxSpeed: 20,
  },
  {
    droneName: 'John',
    propellers: 3,
    maxSpeed: 15,
  }

];
Product.create(products,(err,data) =>{
  if(err){
    throw err;
  }
  data.forEach((element) =>{
    console.log(element);
  });
  mongoose.connection.close();
});
