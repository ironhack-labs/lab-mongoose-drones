const express = require('express');

// require the Drone model here
const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, callback) =>{
    if(err){
      next();
      return;
    } 
    else {
      res.render('index/drone', { drone: data });
    }
  })
});

 // Iteration #3
router.get('/new', (req, res, next) => {
 
  res.send('index', drone);
});

 // Iteration #3
router.post('/', (req, res, next) => {
  res.send()
});

module.exports = router;
