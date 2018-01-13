const Drones = require('../models/drone.model');

module.exports.index = (req,res,next) =>{
    Drones.find({}).then((drones) => {
        console.log(drones);
        res.render('drones/index', {
          drones: drones
        });
      });
} 

module.exports.new = (req,res,next) =>{
    res.render('drones/new',{
        drone: new Drones()
      });
} 

module.exports.create = (req,res,next) =>{
    const data = req.body;
    console.log(data);
    const newDrone = new Drones(data);
    newDrone.save().then((drone) => {
      res.redirect('/drones');
    });
} 
  