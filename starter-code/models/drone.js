//we use moongo for not create all the class and store information, but we do that with mongoose

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

//refactoring

const featuresSchema = new Schema({
	hasCamera: {type: Boolean},
	range: {type: Number}
});

const droneSchema = new Schema ({
	droneName       : {type: String},
	propellers      : {type: Number},
  	maxSpeed   		: {type: Number},
  	features: featuresSchema
});

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;

//UAV

