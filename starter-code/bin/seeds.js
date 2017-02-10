// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lab-mongoose-drones');
const Drone = require('../models/drone');

const drones = [{
  droneName  : 'Vol de Mort',
  propellers : 6,
  maxSpeed   : 66
},
{
  droneName  : 'Hermes',
  propellers : 9,
  maxSpeed   : 99
},
{
  droneName  : 'Icarus',
  propellers : 2,
  maxSpeed   : 20
}];

Drone.remove({}, (err, docs) =>{
  if (err) {throw err};
  Drone.create(drones, (err, docs) => {
    if (err) {throw err};

    docs.forEach((drones) => {
      console.log(drones.droneName)
    })
    mongoose.connection.close();
  })
})
