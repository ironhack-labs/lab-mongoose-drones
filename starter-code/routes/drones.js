const express = require('express');
const router = express.Router();
const app = express();

// require the Drone model here
const dronesModel = require('../models/drone.js');
app.use('/', dronesModel);



router.get('/', (req, res, next) => {
  dronesModel.find((err, droneList) => {
    if(err){
      next(err);
      return;
    }
    res.render('drones/index.ejs', {
    dl: droneList
    });
  });
});



router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});



app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = router;
