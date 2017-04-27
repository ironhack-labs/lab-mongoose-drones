// Iteration #1
//Don't forget that you have to require mongoose in here if you want to import
//things into the database.

const mongoose = require('mongoose');

//I know that the datbase doesn't exist yet, but, this function will create it if it
//doesn't already exist.

mongoose.connect('mongodb://localhost/drone-zoneDB');

//The variable here doesn't have to match the one found in the drone-model
//but I think I will do it anyways, cause... it follows the example
const Drone = require('../models/drone-model.js');

//It's important to remember the keys I set in the drone-model file.
//So... to make it easier I am just going to paste them here.
  // droneName:  { type: String, default: "Unknown Drone" },
  // propellers: { type: Number },
  // maxSpeed:   { type: Number },
  // dronePrice: { type: Number },
  // droneDesc:  { type: String },
  // droneImg:   { type: String }

const drones = [
  {
    droneName:  "DJI Phantom 4 Quadcopter",
    propellers: 4,
    maxSpeed:   44,
    dronePrice: 944,
    droneDesc:  `A sleek new design with magnesium unibody construction obstacle avoidance
                sensor dynamic range enhancing video modes and a two-point-of-contact gimbal mount are
                just some the features DJI have introduced with the Phantom 4 Quadcopter.`,
    droneImg:   "https://www1.djicdn.com/uploads/nav_link/cover/4/size_1000_540_bcb57ae20a1e1d7625997d25995fc164.png"
 },
 {
   droneName:  "DJI Mavic Pro Drone",
   propellers: 4,
   maxSpeed:   40,
   dronePrice: 999,
   droneDesc:  `Folds down as small as a bottle of water, making it small enough to bring with you
                everywhere. New OcuSync transmission system offers up to 4.3 miles (7km) of transmission range.
                Fly at up to 40mph (64kmh) or for as long as 27-minutes. `,
   droneImg:   "https://product1.djicdn.com/uploads/photos/114/medium_4058afad-4331-40ab-9a4e-30b49c72447b.jpg"
},
{
  droneName:  "Parrot Disco Fixed Wing Drone",
  propellers: 1,
  maxSpeed:   50,
  dronePrice: 999,
  droneDesc:  `The Parrot PF750000 is a lightweight fixed-wing design disco drone. The nose of the Disco is dominated by a 1080p
               FULL HDfront-facing camera. Combined with 32GB of built-in memory, the Disco can record HD videos, and high-resolution
               photos. This drone can reach 49.71 mph with its powerful high-performance motor. One fully charged 2700 mAh battery guarantees
               up to 45 minutes of battery life. It natively operates on Wi-Fi, and can be controlled just using a smartphone.`,
  droneImg:   "http://www.popsci.com/sites/popsci.com/files/styles/large_1x_/public/parrot_disco_drone_right.jpg?itok=6LT6JM4u"
}

]; //the end of the drones imported into db

//this is how you will import the drones into your db

Drone.create(drones, (err, droneDBdocs) => {
  //if there is an error entering these items into the db...let me know
  //I actually forgot if this is the correct way, I know throw is the wrong way
  if (err) {
    console.log("There was an error");
  }
  //success messages
  droneDBdocs.forEach((indvDrone) => {
    console.log(`DB was able to add ----> ${indvDrone.droneName}`);
    //as the instructions said, don't forget to close the connection or else
    //the process will keep running on your terminal after import

    mongoose.connection.close();
  }); //end of for each statement
}); //end of the create function into the databasaaaa
