const express = require('express');

const Drones = require('../models/Drone');
var bodyParser = require('body-parser');
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

router.post('/new', (req, res, next) => {
  // Iteration #3
  console.log(req.body);
  const dronePepito = new Drone( {
     droneName: req.body.droneName,
     propellers: req.body.propellers,
     maxSpeed: req.body.maxSpeed
 });
  console.log(dronePepito);
  const newDrone = new Drone(newDroneInfo);

  dronePepito.save( (err) => {
  if (err) {
    console.log("ERROR");
    return render('drones/new');
  }
  return res.redirect('/index');
});

});

module.exports = router;
