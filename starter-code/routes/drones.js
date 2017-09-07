const express = require('express')

// require the Drone model here
const dronModel = require('../models/Drone')
const router = express.Router()


router.get('/drones', (req, res, next) => {
  // Iteration #2
  dronModel.find({}, (error, drones) => {
    if (error) {
      return next(error)
    }
    res.render('drones/index', {
      drones: drones
    })
  })
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
})

router.post('/drones', (req, res, next) => {
  // Iteration #3
})

module.exports = router
