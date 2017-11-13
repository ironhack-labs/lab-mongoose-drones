const mongoose = require('mongoose');

// use native JavaScript promises in Mongoose commands
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/drones-dev', { useMongoCLient: true })
  .then( () => {
      console.log("Mongoose is connected!");
  })
  .catch( (err) => {
      console.log("Mongoose connection FAILED! 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨");
      console.log(err);
  });
