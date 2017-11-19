// Iteration #1
require("../config/mongoose-setup");

const DroneModel = require("../models/drone-model");
// forgot to declare as a const to make it work

const droneInfo = [
  {
    droneName: "Pterodactyl",
    propellers: 4,
    maxSpeed: 20
  },
  {
    droneName: "Sordes",
    propellers: 3,
    maxSpeed: 12
  },
  {
    droneName: "Jeholopterus",
    propellers: 6,
    maxSpeed: 18
  }
];

DroneModel.create(droneInfo)
  .then((droneResults) => {
    console.log('Inserted ${droneResults.length} drones');
  })
  .catch((err) => {
    console.log("Drone insert error!");
    console.log(err);
  });
