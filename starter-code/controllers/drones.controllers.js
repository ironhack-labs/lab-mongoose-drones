const Drones = require('../models/drone.model');

module.exports.index = (req,res,next) =>{
    Drones.find({}).then((drones) => {
      //  console.log(drones);
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

module.exports.show = (req,res,next) =>{
  Drones.findById(req.params.id).then((drones) => {
   // console.log(drones);
    res.render('drones/show', {
      drone: drones
    });
  });
} 

module.exports.edit = (req,res,next) =>{
  console.log("GIASF");
  Drones.findById(req.params.id).then((drones) => {
    console.log(drones);
    res.render('drones/show', {
      drone: drones
    });
  });
}

module.exports.update = (req,res,next) =>{
  console.log(req.params);
  Drones.findByIdAndUpdate( req.params.id,{$set: req.body}, { 'new': true} ).then((drones) => {
    console.log(drones);
    res.redirect('/drones');
  });
}

module.exports.delete = (req,res,next) =>{
//  console.log("Sdfasdfasdf");
  Drones.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect('/drones');
  });
}
  