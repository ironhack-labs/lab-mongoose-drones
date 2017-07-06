const express = require('express');

// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, p) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {
        title: 'Drone shop',
        drones: p
      });
    }
  }
);
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
