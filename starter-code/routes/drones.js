const express = require('express');
const Drone = require('../models/drone');

const router = express.Router();


router.get('/', (req, res, next) => {
    Drone.find({}, (err, result) => {
      if (err) { return next(err);}

      res.render('./drones/index', {
        drones: result
      });
    });
  });


router.get('/new', (req, res, next) => {
    res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  const dronecito = {
      droneName: req.body.droneName,
      propellers: req.body.propellers,
      maxSpeed: req.body.speed,
  };

  // const newProduct = new Product(productInfo);
  //   // Save the product to the DB
  //    newProduct.save( (err) => {
  //      if (err) { return next(err) ;}
  //      // redirect to the list of products if it saves
  //      return res.redirect('/products');
  //    });
});

module.exports = router;
