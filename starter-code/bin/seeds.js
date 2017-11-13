// Iteration #1
require("../config/mongoose-setup");

const DroneModel=require("../models/drone-model");

const droneInfo=[{
  droneName: "Destroyer",
  propellers: 4,
  maxSpeed: 20
},
{
  droneName: "BabyCakes",
  propellers: 9,
  maxSpeed: 70
},
{
  droneName: "Batmobile",
  propellers: 3,
  maxSpeed: 50
}];


DroneModel.create(droneInfo)
.then((droneResults)=>{
  console.log(`Inserted ${droneResults.length} products`);
  console.log("SUCCESS!");
})
.catch((err)=>{
  console.log("Drone insert error!");
  next(err);
});//GET products
