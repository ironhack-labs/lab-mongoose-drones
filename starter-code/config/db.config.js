const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/drones-dev', { useMongoClient: true });
