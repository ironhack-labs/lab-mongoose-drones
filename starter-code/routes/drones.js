const express = require('express');
const router = express.Router();

// require the Drone model here
router.get("/drones", (req, res, next) => {
  res.render("drones/new");
});




router.get('/drones', (req, res, next) => {
  // Iteration #2
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
