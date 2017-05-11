// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');

const Drone = require('../models/drone');

const drones = [

  {
  droneName : 'Phantom',
  propellers : 4,
  maxSpeed : 70,
},

{
droneName : 'Mavic',
propellers : 5,
maxSpeed : 80,
},

{
droneName : 'Andrea',
propellers : 8,
maxSpeed : 90,
},

]



Drone.create(drones, (err, docs) => {
 if (err) {
   throw err;
 }

 docs.forEach((drone) => {
   console.log(drone.droneName)
 });
 mongoose.connection.close();
});
