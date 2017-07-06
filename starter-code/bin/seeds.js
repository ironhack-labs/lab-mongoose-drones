// Iteration #1
//Hacer un requerimiento
const Drone = require('../models/drone.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/crud-drones')
.then(() => {
  let arrayDrones = [{
    droneName: "Victor",
    propellers: 6,
    maxSpeed: 20
  }, {
    droneName: "Interstellar",
    propellers: 8,
    maxSpeed: 25
  }, {
    droneName: "Ferrodri",
    propellers: 3,
    maxSpeed: 23
  }];

  //para cada elemento del arrayDrones hemos creado una nueva instanciua del Objeto Drone
  let droneObj = arrayDrones.map(e => new Drone(e));

  droneObj.forEach(e => e.save((err, obj) => {
    if (err) {
      console.log("vaya" + err);
    } else {
      console.log(`New drone [${obj.droneName}]`);
    }
  }));

});
