const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone');


router.get('/', (req, res, next) => {
  Drone.find().exec((err, drones)=>{
    res.render('drones/index',{
      drones : drones,
    })
    if(err){return next(err);}
  })
});


router.get('/new', (req, res, next) => {
  res.render('drones/new');
});

router.post('/', (req, res, next) => {
  const {name, proppellers, maxSpeed} = req.body;
  const drone = new Drone({name, proppellers, maxSpeed});
  drone.save( err =>{
    if(err){return next(err)}
    res.redirect('/');
  })
});

module.exports = router;
