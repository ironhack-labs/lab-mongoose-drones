const express = require('express');

// require the Drone model here
const Dron = require('../models/drone');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
    Dron.find({}, (err, drons) => {
      if (err) {
        return next(err) //Si hay un error se lo paso al siguiente y mientras me muestra un error que viene definido en app.js y nunca se mostraría el render de index. Es un middleware que ponemos
      }
      res.render('drones/index', {
        foo: drons
      });
    });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
