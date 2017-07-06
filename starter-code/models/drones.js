
const moongose = require('mongoose');
const Schema = moongose.Schema;

const droneSchema = new Schema({
    droneName: String,
    propellers: Number,
    maxSpeed: Number
});

// name Product of the model and the schema name.
const Drone = moongose.model('Drone', droneSchema);

module.exports = Drone;