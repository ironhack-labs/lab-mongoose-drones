const express = require('express');


// require the Drone model here
const Drone = require('../models/drone')

const router = express.Router();


router.get('/drones', (req, res, next) => {
    Drone.find({}, function (err, drones) {
        if (err) return next(err);
        res.render('drones', {
            Title: 'My Drones', drones
        });
    });
});


module.exports = router;


router.get('/drones/new', (req, res, next) => {
    res.render('drones/new', {
      title: 'Add a new drone'
    })
});

router.post('/drones', (req, res, next) => {
    const {name, propellers, maxSpeeds} = req.body
    const newDrone = new Drone({name, propellers, maxSpeeds})
    newDrone.save(function (err, doc) {
      if (err) return next(err)
      res.redirect('/drones')
    })
});


router.get('/drones/:id', (req, res, next) => {
    const id = req.params.id
    Drone.findOne({_id: id}, function (err, drones) {
      if (err) return next(err)
      res.render('drones/show', {
        title: `Drones-Speed`,
        drones
      })
    })
});
//${drones.maxSpeeds}

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #6 (Bonus)
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #6 (Bonus)
});


router.post('/drones/:id/delete', (req, res, next) => {
    const id = req.params.id
    const criteria = {_id: id}
    Drone.remove(criteria, function (err) {
      if (err) return next(err)
      res.redirect('/drones')
    })
});


module.exports = router;
