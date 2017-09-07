var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/experiments');

var Drone = require("../models/drone.js");

//console.log("yay");

const defaultDrone = [
  new Drone({droneName: "ByronDron", propellers: 4, maxSpeed: 100}),
  new Drone({droneName: "MarkDron", propellers: 4, maxSpeed: 100}),
  new Drone({droneName: "AndreDron", propellers: 4, maxSpeed: 100})
];

//const drone = new Drone({luis: 0});

//console.log("drone before saving", drone);

// drone.save((err, doc) => {
//   console.log("error?", err);
//   console.log("drone after saving", drone, doc);
//   //mongoose.disconnect();
// });
//
// Drone.create(defaultDrone, (err, data) => {
//   if(err){
//     throw err;
//   }
//   else{
//     data.forEach((drone) => console.log(drone.droneNames));
//     mongoose.disconnect();
//   }
// });


Drone.find({}, (err, docs) => {
  docs.forEach(function(doc){
    console.log(doc.droneName);
  });
  mongoose.disconnect();
});
