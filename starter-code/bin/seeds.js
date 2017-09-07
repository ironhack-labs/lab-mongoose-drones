// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone');
mongoose.connect('mongodb://localhost/moongose-drone', {useMongoClient: true});


const droneData = [
  {
    droneName: 'Verotronic',
    propellers: 2,
    maxSpeed: '200',
  },
  {
    droneName: 'Apache',
    propellers: 4,
    maxSpeed: '300',
  },
  {
    droneName: 'Marqui',
    propellers: 3,
    maxSpeed: '100',
  }
];

Drone.create(droneData, (err, docs) => {
  if (err) {
    throw err;
  }
  // console.log(docs)
  docs.forEach( (e) => {
    console.log( e.droneName )
  });
  mongoose.connection.close();
});
