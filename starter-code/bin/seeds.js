// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/drones-dev'); //BBDD: dronesDev
const Drone = require('../models/drone'); //specific drone model. 

const drones = [{
    droneName: 'DJI Inspire 1 V2',
    propellers: 8,
    maxSpeed: 22
  },
  {
    droneName: 'GoPro Karma',
    propellers: 4,
    maxSpeed: 20
  },
  {
    droneName: 'Yizhan X4 LCD',
    propellers: 2,
    maxSpeed: 12
  }
];

// create mongoose.
// docs resultado del callback de create
// npm run seeds
Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((drone) => {
    console.log(drone.droneName);
  });
  mongoose.connection.close();
});
/*npm install
npm install --save-dev nodemon
npm install --save mongoose
npm start-dev
npm run start-dev

*/ 