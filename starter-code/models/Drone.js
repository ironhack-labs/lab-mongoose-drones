const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema ({
    name:String,
    propellers:Number,
    maxSpeed: Number
})

//Modelo con Schema
module.exports = mongoose.model("Drone", droneSchema);