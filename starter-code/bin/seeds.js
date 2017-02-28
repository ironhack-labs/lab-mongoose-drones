// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');
const Drone = require('../models/drone.js');
//requires drone model so we can make
//more drones out of Schema 'model'

const drones = [
  {
    droneName: 'Aethos',
    propellers: 7,
    maxSpeed: 20
  },
  {
    droneName: 'Fl-Tiger',
    propellers: 6,
    maxSpeed: 15
  },
  {
    droneName: 'Tweety Bird',
    propellers: 4,
    maxSpeed: 12
  }
];

Drone.create(drones, (err, info, next) => {
  if (err) {
    next(err);
    return;
  }
  /// When you plant the "seeds"
  // And create the drones, it will automatically
  // console.log the names and ID's
  // for the 'documents' created
  info.forEach((oneDrone) => {
    console.log(`${oneDrone.droneName}
    ${oneDrone._id}`);
  });

mongoose.disconnect();

});

///ASK ARIEL TO TRANSLATE PLS///



// router.get('/drones',(req, res, next) => {
// //Get Drones Page (DB)
// Drone.find((err, drones) => {
// //Query the database
//   if (err) {
//     next(err);
//     return;
//   }
// res.render('drones/index', {
//   drones:drones
//         });
//     });
//
// });
