const express = require('express');
const Drone = require('../models/drone.js');
const router = express.Router();


router.get('/drones', (req, res, next) => {
    Drone.find((err, listofdrones) => {

        console.log(listofdrones.droneName);
        if (err) {
            next(err);
        }
        res.render('drones/drone-views.ejs', {
            drones: listofdrones
        });
    });
});



router.get('/drones/new', (req, res, next) => {
    res.render('drones/new-drones-view.ejs');
});

router.post('/drones/new', (req, res, next) => {
    const thenewDrone = new Drone({

        droneName: req.body.droneNameValue,
        propellers:req.body.propellersValue,
        maxSpeed:req.body.maxSpeedValue

    });
    thenewDrone.save((err)=>{
      if (err) {
        next(err);
        return;

      }

    });
    res.redirect('/drones');
});

module.exports = router;
