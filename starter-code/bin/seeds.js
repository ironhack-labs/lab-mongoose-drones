// Iteration #1
require("../config/mongoose-setup");

const DroneModel = require("../models/drone");

const droneInfo = [
  {
    name: "Flying Chu",
    propellers: 7,
    maxSpeed: 13
  },
  {
    name: "Jumper Josh",
    propellers: 12,
    maxSpeed: 65
  },
  {
    name: "Drunken Master",
    propellers: 4,
    maxSpeed: 23
  }
];

DroneModel.create(droneInfo)
  .then( (droneResults) => {
    console.log(`Inserted ${droneResults.length} drones`);
  })
  .catch((err) => {
    console.log("Drone insert error!");
    console.log(err);
  });
