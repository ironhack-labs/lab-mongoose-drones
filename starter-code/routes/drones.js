const express = require("express");

// require the Drone model here

const router = express.Router();

router.get("/drones", (req, res, next) => {
  // Iteration #2
  Drones.find({}, (err, users) => {
    if (err) {
      next(err);
    } else {
      const data = {
        drones: drones
      };
    }
  });
});

router.get("/drones/new", (req, res, next) => {
  // Iteration #3
});

router.post("/drones", (req, res, next) => {
  // Iteration #3
});

module.exports = router;
