// Iteration #1
const Drone = require('../models/Drone');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev')
  .then(() => {
    let drones = [
      {
        droneName: "droneJorge",
        propellers: 6,
        maxSpeed: 23
      },
      {
        droneName: "droneJuan",
        propellers: 8,
        maxSpeed: 50
      },
      {
        droneName: "droneEt",
        propellers: 10,
        maxSpeed: 75
      }
    ];
    let dronesObj = drones.map((drone) => {
      console.log("Todo OK Jeff, drone created");
      return new Drone(drone);
    });

    dronesObj.forEach(drone => drone.save( (err, obj) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`New drone created
          Named ${obj.droneName}
          with ${obj.proppelers} propellers
          and ${obj.maxSpeed} as max speed`);
      }
    }));
  });
