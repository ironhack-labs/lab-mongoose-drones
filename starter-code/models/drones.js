const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DroneSchema = new Schema ({
  droneName : {type: String,
               required: [true, 'Please enter the name of the Drone']
              },
  propellers: {type: Number,
               required: [true, 'Please enter the number of propellers'],
               min: 0
              },
  maxSpeed: {type: Number,
             required: [true, 'Please enter the maxSpeed'],
             min: 0
            },
})

const Drone = mongoose.model('Drone', DroneSchema);

module.exports = Drone;
