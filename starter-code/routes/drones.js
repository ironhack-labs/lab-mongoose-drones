const express = require('express');

// require the Drone model here
const Drone = require('../models/drone')
const router = express.Router();


// Iteration #2
router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) {
      next(err);
    } else {
      res.render('drones/index', { drones } );
    }
  })
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new');
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
  const droneInfo = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  }

  const newDrone = new Drone( droneInfo )
  newDrone.save( (err) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/drones')
    }
  })
});

module.exports = router;




router.post('/', (req, res, next )=> {
  const productInfo = {
    name: req.body.name,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    description: req.body.description
  }

  const newProduct = new Product( productInfo )
  newProduct.save( (err) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/products')
    }
  })
})
