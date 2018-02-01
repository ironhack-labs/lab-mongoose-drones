// Iteration #1
const mongoose = require('mongoose');

// --

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/drones', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});

const Drone = require('../models/drone');

const drones = [ {

  name: 'drone1',
  propellers: 2,
  maxSpeed: 160

},
{
  name: 'drone2',
  propellers: 3,
  maxSpeed: 180
},
{
  name: 'drone3',
  propellers: 16,
  maxSpeed: 120
}];

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((drone) => {
    console.log(drone.name);
  });
  mongoose.connection.close();
});
