// Iteration #1
const Drone = require('../models/Drone');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev')
  .then(() => {
    let drones = [{
        droneName: 'General Atomics',
        propellers: 4,
        maxSpeed: 18,
      },
      {
        droneName: 'Racer57',
        propellers: 6,
        maxSpeed: 20,
      },
      {
        droneName: 'Courier3000i',
        propellers: 3,
        maxSpeed: 12,
      }
    ];

    let droneObj = drones.map(p => new Drone(p));
    droneObj.forEach(p => p.save((err, obj) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`New drone created [${obj.droneName}] with ID:${obj._id}`);
      }
    }));
    // mongoose.connection.close();
  });
