// Iteration #1

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/drone', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
})

const Drone = require('../models/drone')

const drones = [
  {
    name: 'Creeper XL 500',
    propellers: 3,
    maxSpeed: 12
  },
  {
    name: 'Racer 57',
    propellers: 4,
    maxSpeed: 20
  },
  {
    name: 'Courier 3000i',
    propellers: 6,
    maxSpeed: 18
  }
]

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err
  }

  docs.forEach((drone) => {
    console.log(drone.name)
  })
  mongoose.connection.close()
})
