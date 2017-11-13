// Iteration #1
require("../config/mongoose-setup");

const DroneModel = require("../models/drone-model");

const droneInfo = [
  {
    droneName: "Pterodactyl",
    propellers: 8,
    maxSpeed: 240
  },
  {
    droneName: "Sordes",
    propellers: 6,
    maxSpeed: 200
  },
  {
    droneName: "Jeholopterus",
    propellers: 4,
    maxSpeed: 160
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
