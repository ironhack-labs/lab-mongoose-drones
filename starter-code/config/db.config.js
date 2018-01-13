const mongoose = require ('mongoose');

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/superdrone', {useMongoClient: true});
