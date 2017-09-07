const express = require('express')
const Drone = require('../models/Drone')
// require the Drone model here

const router = express.Router()


router.get('/', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, dron) =>{
    if(err){ return next(err) }
    res.render('./drones/index');
  })


})

router.get('/new', (req, res, next) => {
  // Iteration #3
})

router.post('/', (req, res, next) => {
  // Iteration #3
})

module.exports = router
