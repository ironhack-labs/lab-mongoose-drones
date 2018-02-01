
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 const DroneSchema = new Schema({
     name: String,
     propellers: Number,
     maxSpeed: Number
 });

const Drones = mongoose.model('Drones', DroneSchema);




module.exports = Drones;


// newDrones.save((err) => {
//      if (err) {
//          console.log(err);
//      } else {
//          console.log('jaja');
//      }
//  });



// const Drone = mongoose.model('Drone', {
//     name: String,
//     propellers: Number,
//     maxSpeed:Number
//   })
//   const instDrone = new Drone({
//     name: 'Ironhacker',
//     propellers: 4,
//     maxSpeed:18
//   })