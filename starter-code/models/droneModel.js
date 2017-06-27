//Import mongoose and save Schema constructor to a variable
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema of this model
const droneSchema = new Schema({
    droneName: {type: String} ,
    propellers: {type: Number},
    maxSpeed: {type: Number}

});

//Model: 'Drone' Collections: "drones"
const Drone = mongoose.model('Drone', droneSchema); //1st argument -> Model name
                                                    //2nd argument -> Schema

//export this when 'required'
module.exports = Drone;
