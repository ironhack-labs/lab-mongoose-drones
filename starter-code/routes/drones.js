const express = require('express')
const Drone = require('../models/drone')

const router = express.Router()

router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) { return next(err) }

    res.render('drones/index', {
      drones: drones
    })
  })
})

router.get('/drones/new', (req, res, next) => {
  res.render('drones/new', {})
})

router.post('/drones', (req, res, next) => {
  let newDrone = {
    name: req.body.name,
    propellers: Number(req.body.propellers),
    maxSpeed: Number(req.body.maxSpeed)
  }

  let drone = new Drone(newDrone)
  drone.save((err, docs) => {
    if (err) {
      console.log(err)
    } else {
      console.log(docs)
    }

    res.redirect('/drones')
  })
//   }
// )

// Drone.create(drones, (err, docs) => {
//   if (err) {
//     throw err;
//   }
})

module.exports = router
