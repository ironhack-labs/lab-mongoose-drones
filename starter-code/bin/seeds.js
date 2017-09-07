const mongoose = require('mongoose')
const Drone    = require('../models/Drone')
const {dbURL}  = require('../config/db')

mongoose.connect(dbURL, {useMongoClient: true})

const droneList = [
  {
    droneName : 'Furgencio',
    propellers: 4,
    maxSpeed  : 40 
  },
  {
    droneName : 'Laurencio',
    propellers: 2,
    maxSpeed  : 30 
  },
  {
    droneName : 'Memencio',
    propellers: 6,
    maxSpeed  : 200 
  }
]

Drone.create(droneList, (err, docs) => {
  if (err) { throw err }
  docs.forEach(drone => console.log(drone.droneName))
  mongoose.connection.close()
})