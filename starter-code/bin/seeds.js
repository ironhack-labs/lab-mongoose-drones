//SEEDS LEER BORRAR CREAR EN BASE DE DATOS//

const mongoose = require("mongoose")
//COMPARTIMOS EL MODELO DRONE
const Drones = require ("../models/Drones")
//
mongoose.connect('mongodb://localhost/exampleApp');


const droneInitial = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  Drones.collection.drop();

  droneInitial.forEach( p =>{
    let newDrone = new Drones(p);
    newDrone.save((err, dro) => {
        if(err){
            throw err;
        }
        console.log(`Drone guardado ${dro._id}`);

})
});

  