const express = require('express');

const DroneModel = require('../models/drone-model.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/drones', (req, res, next) => {
  DroneModel.find((err, dronesArray)=>{
    if (err) {
      next(err);
      return;
    }
    res.render('../views/drones/all-drones-view.ejs', {
      dronesList : dronesArray
    });
  });
});

// Adding a new drone ---------------------------
router.get('/drones/new', (req, res, next) => {
  res.render('../views/drones/new.ejs');
});

router.post('/drones', (req, res, next) => {
  const newDrone = new DroneModel ({
    droneName: req.body.droneName,
    propellers: req.body.dronePropellers,
    maxSpeed: req.body.droneMaxSpeed
  });

  newDrone.save((err)=>{
      if (err) {
        // use next() to skip to the ERROR PAGE
        next(err);
        return;
      }
      res.redirect('/drones');
  });
});

// Editing existing drone --------------------

//Step 1 of form submission for updating a product
router.get('/drones/:myID/edit', (req, res, next) => {
  DroneModel.findById(
    req.params.myID,
    (err, droneFromDb) => {
      if(err) {
        next(err);
        return;
      }

      res.render('drones/edit',{
        theDrone : droneFromDb
      });
    }
  );
});

//STEP #2 of form submission for an edit product
router.post('/drones/:myID/update',(req, res, next)=>{
// The parameters that findByIdandUpdate needs:
    DroneModel.findByIdAndUpdate(
      req.params.myID,       // 1: the ID
      {                      //2: object fields to update
        droneName: req.body.droneName,
        propellers: req.body.dronePropellers,
        maxSpeed: req.body.droneMaxSpeed
      },
      (err, productFromDb) => {  //3: callback
        if(err) {
          next(err);
          return;
        }
        res.redirect('/drones');
      }
    );
});

// REMOVING ITEM ---------------------------------

router.post('/drones/:myID/remove',(req, res, next)=>{
// The parameters that findByIdandRemoveneeds:
    DroneModel.findByIdAndRemove(
      req.params.myID,             // 1: the ID
      (err, droneFromDb) => {   //2: callback
        if(err) {
          next(err);
          return;
        }
        res.redirect('/drones');
      }
    );
});



module.exports = router;
