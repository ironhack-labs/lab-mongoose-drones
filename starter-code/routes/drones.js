const express = require('express');

const Drones = require('../models/Drone');

const router = express.Router();


router.get('/', (req, res, next) => {
    Drones.find({}, (err, dron) => {
      if(err){
      console.log("ERROR");
      console.log(err);
      } else {
          res.render('drones/index', {dron:dron});
      }

    });

});


router.get('/new', (req, res, next) => {
  // Iteration #3
  console.log("Estoy en NEW, acabo de entrar");
  res.render('drones/new');

});

router.post('/', (req, res, next) => {
  // Iteration #3
  const newDroneInfo = {
     droneName: req.body.droneName,
     propellers: req.body.propellers,
     maxSpeed: req.body.maxSpeed
 };

  const newDrone = new Drone(newDroneInfo);

  newDrone.save( (err) => {
  if (err) {
    return render('drones/new', { errors: newProduct.errors });
  }
  return res.redirect('/index');
});

});

module.exports = router;
