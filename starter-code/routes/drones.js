const express = require('express');
const DroneModel=require("../models/drone-model.js");
const router = express.Router();

router.get('/drones', (req, res, next) => {
  DroneModel
  .find()
  .exec()
  .then((droneResults)=>{
    res.locals.listOfDrones=droneResults;
    res.render("drones/index");
  })
  .catch((err)=>{
    next(err);
  });

});//END get


router.get('/drones/new', (req, res, next) => {
  res.render("drones/new");
});//END GET NEW

router.post('/drones', (req, res, next) => {
  const theDrone= new DroneModel({
    droneName: req.body.name,
    propellers: req.body.dronePropellers,
    maxSpeed: req.body.droneSpeed
  });
  theDrone.save()
  .then(()=>{
    res.redirect("/drones");
  })
  .catch((err)=>{
    next(err);
  });
});

module.exports= router;
