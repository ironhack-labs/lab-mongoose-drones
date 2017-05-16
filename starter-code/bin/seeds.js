// Iteration #1
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/drones-dev');


const Drone = require('../models/drone.js');


const drones = [
  { droneName: 'Mavic Pro', propellers: 4, maxSpeed: 40,description: "The DJI Mavic Pro is an extremely popular drone, and for good reason. The DJI Mavic Pro marked a new direction for drone king DJI - a smaller, compact aircraft built to travel with ease. With a 4K camera, small size, and host of other features, the Mavic Pro is a top notch starter drone. Its compact size makes it ideal for transport, and results in an impressively short prep time before flying. ", imageUrl:'../images/cuadcopter.jpg' },

  { droneName: 'Phantom 4', propellers: 4, maxSpeed: 20, description: "Phantom 4 quadcopter offers more power, speed, and features than the Phantom 3. This Phantom 4 HD video camera sports 4K resolution, while the drone itself has multiple sensors, dual GPS and GLONASS navigation, an advanced Visual Positioning System (VPS), and automated subject-tracking and obstacle avoidance.", imageUrl:'../images/phantom.jpg' },


  { droneName: 'DJI Inspire 1', propellers: 4, maxSpeed: 18 , description: "The new DJI Inspire 1 is a massive upgrade taking it much higher end. The camera that comes with the Inspire 1 shoots DCI 4K at 4096 x 2160 as well as Ultra HD at 3840 x 2160, with support for 30,25 and 24p. Radio range is 1.2 miles and it streams a high quality 720p feed for monitoring on the remote control. Extra handsets at $650 allow for a second operator and BOTH benefit from the HD feed", imageUrl:'../images/dji-inspire.jpg'}
];


  // db.drones.insertMany()
Drone.create(drones, (err, droneDocs) => {
  if (err) {
    throw err;
  }

  droneDocs.forEach((oneDrone) => {
    console.log(`NEW DRONE ${oneDrone.imageUrl} -> ${oneDrone._id}`);
  });
  mongoose.disconnect();
});
