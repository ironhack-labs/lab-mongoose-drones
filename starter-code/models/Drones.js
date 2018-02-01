
const mongoose = require('mongoose');
//Creamos un esquema 
const Schema   = mongoose.Schema;
const droneSchema = new Schema({
  name : String,
  propellers: Number,
  maxSpeed: Number
});

//Creamos un modelo
const modelDrone = mongoose.model('modelDrone', droneSchema);


//Exportamos el modelo de Drone
module.exports = modelDrone;
