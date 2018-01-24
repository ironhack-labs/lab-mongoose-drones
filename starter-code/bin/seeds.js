const mongoose = require('mongoose');
const { url, dbName } = require('../config');

mongoose.connect(`mongodb://${url}/${dbName}`);

const Drone = require('../models/drones');

const drones = [
  {
    name: 'Marx',
    propellers: 4,
    maxSpeed: 60,
  },
  {
    name: 'Olimpia',
    propellers: 3,
    maxSpeed: 40,
  },
  {
    name: 'Kira',
    propellers: 2,
    maxSpeed: 20,
  },
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
];

Drone.create(drones, (err, docs) => {
  if (err) {
    console.log('ERROR = ', err);
  } else {
    docs.forEach((doc, index) => {
      console.log(`doc ${doc} inserted at position ${index}`)
    });
  }
});
