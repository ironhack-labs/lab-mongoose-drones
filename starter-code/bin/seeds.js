// Iteration #1
require("../config/mongoose-setup");


const droneModel = require ("../models/drone-model");

const droneInfo = [
  {
    droneName : "Super drone",
    propellers : 8,
    maxSpeed : "300"
  },
  {
    droneName : "Hyper drone",
    propellers : 9,
    maxSpeed : "500",
  },
  {
    droneName : "Okay drone",
    propellers : 3,
    maxSpeed : "100"
  }
];

droneModel.create(droneInfo)
.then((droneResults) => {
  console.log(`Inserted ${droneResults.lenght} drones`);
})
.catch((err) => {
  console.log("Drone insert error");
  console.log(err);
});
