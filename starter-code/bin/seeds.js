require('../config/mongoose-setup');
 const DroneModel = require('../models/drone-model.js');

 const droneInfo = [
   {
     droneName: 'Larry',
     propellers: 3,
     maxSpeed: 20
   },
   {
     droneName: 'Curly',
     propellers: 4,
     maxSpeed: 30
   },
   {
     droneName: 'Mo',
     propellers: 6,
     maxSpeed: 50
   },
 ];

 DroneModel.create(droneInfo).then(droneResults =>{
   console.log(`Inserted ${droneResults.length} drones`);
 }).catch(error => {
   console.log(error);
 });
