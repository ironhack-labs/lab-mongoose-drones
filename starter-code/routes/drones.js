const express = require('express');

// require the Drone model here
const Drone = require('../models/drone');

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find((err,drones)=>{
    if(err){
      next(err);
      return;
    }
    res.render('drones/index',{
      drones : drones
    });
  });

});


router.get('/drones/new', (req, res, next) => {
  // Iteration #4
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  // Iteration #4
  const newDrone = new Drone({
    droneName : req.body.droneName,
    propellers : req.body.propellers,
    maxSpeed : req.body.maxSpeed
  });

  newDrone.save(err => {
      res.redirect('/drones');
  });

});


router.get('/drones/:id', (req, res, next) => {
  // Iteration #3
  const id = req.params.id;
  Drone.findOne({_id: id}, (err, result)=>{
    if (err){
      next(err); return;
    }

    res.render('drones/show',{
      drone : result
    });
  });
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #6 (Bonus) EDIT
  const id = req.params.id;
  Drone.findOne({_id:id}, (err,result)=>{
    if(err){
      next(err); return;
    }

    res.render('drones/edit', {
      drone : result
    });
  });
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #6 (Bonus) EDIT
  const id = req.params.id;

  Drone.findOne({_id: id}, (err,result) =>{
    result.droneName = req.body.droneName;
    result.propellers = req.body.propellers;
    result.maxSpeed = req.body.maxSpeed;

    result.save(err=>{
      if(err){
        next(err); return;
      }

      res.redirect(`/drones/${id}`);
    });
  });
});


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5 (Bonus)
  const id = req.params.id;
  Drone.findOneAndRemove({_id:id},(err)=>{
    if(err){
      next(err); return;
    }

    res.redirect('/drones');
  });
});


module.exports = router;
