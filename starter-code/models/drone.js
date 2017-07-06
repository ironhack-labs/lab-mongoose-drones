const mongoose = require('mongoose');
const Schema = mongoose.Schema; //getting the class from the package

//Create an instance of the class schema
const droneSchema= new Schema ({
    droneName: String,
    propellers: Number,
    maxSpeed: Number
    
});


//Create the model

const Drone = mongoose.model('Drone', droneSchema);

module.exports=Drone; 