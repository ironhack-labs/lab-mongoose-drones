const mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/drones-dev", {
    useMongoClient: true
  })
  .then(() => {
    console.log("Mongoose is connected");
  }).catch((err) => {
    console.log("Mongoose connection FAILED! :red_circle: :red_circle:");
    console.log(err);
  });
