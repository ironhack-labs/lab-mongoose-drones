/*jshint esversion: 6 */

const express = require('express');

// require the Drone model here

const router = express.Router();

const Product = require('../models/products');


router.get('/drones', (req, res, next) => {
  Product.find( {},(err,product)=>{
    if(err){
      return next(err);
    }
    res.render("drones/index", {product});
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  const productInfo = {
     droneName: req.body.droneName,
     propellers: req.body.propellers,
     maxSpeed: req.body.maxSpeed,
 };

  const newProduct = new Product(productInfo);
  // Save the product to the DB
  newProduct.save( (err) => {
      if (err) { return next(err); }
      // redirect to the list of products if it saves
      return res.redirect('/drones');

  });
});

module.exports = router;
