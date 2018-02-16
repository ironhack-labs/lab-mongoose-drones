const mongoose= require("mongoose");
const Schema = mongoose.Schema;
const droneSchema= new Schema({
    name:String,
    propellers:Number,
    maxSpeed:Number
});


//modelo con esquema
module.exports = mongoose.model("Drone",droneSchema);
