const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/droneshop', {useMnogoClient: true}).then(() => {
  console.log('Mongoose is connected');
}).catch(error =>{
  console.log(error);
});
