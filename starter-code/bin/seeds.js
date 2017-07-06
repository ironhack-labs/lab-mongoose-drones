// Iteration #1
const Drone = require('../models/Drone');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/drones-dev')
  .then(() => {
    let drones = [{
        dronName: 'General Atomics RQ4 Reaper',
        propellers: 1,
        maxSpeed: 150
      },
      {
        dronName: 'DJi Phantom 4',
        propellers: 4,
        maxSpeed: 10
      },
      {
        dronName: 'Parrot Superfly',
        propellers: 8,
        maxSpeed: 3
      },
    ];

    let droneObj = drones.map(d => new Drone(d));

    droneObj.forEach((d, index, array) => d.save((err, obj) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`New drone created. Id: ${obj._id}`);
      }
      if (index === array.length - 1) mongoose.disconnect();
    }));


  });
