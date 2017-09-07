// const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost/experiments');
// const Octopus = mongoose.model('Octopus', { name: String, spiky: String });
// const kitty = new Octopus({ name: "fred", spiky: "not so much" });


//SCHEMA
mongoose.connect('mongodb://localhost/experiments');

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const catSchema = new Schema({
  name     : {type: String},
  color    : {type: String},
  age      : { type: Number, min: 0, max: 30 },
  toys     : {type: Array,
              items: String}
  }, // Array of strings
  vetVisits: [Date],   // Array of Dates
  owners   : [Schema.Types.ObjectId] // Array of Object IDs
});

const Cat = mongoose.model('Cat', catSchema);


function listCats(){
  Cat.find({}, (err, cats) => {
  // cats is an array of Cat instances
  cats.forEach((cat)=> {
    console.log(' --> cat: ', cat.name);
  });
});
mongoose.connection.disconnect
}


//if you want to define a model
// kitty.save((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('i need peanut butter');
//   }
// });

/*
//find things that already exist
console.log('All the CATS!');

Cat.find({}, (err, cats) => {
  // cats is an array of Cat instances
  cats.forEach((cat)=> {
    console.log(' --> cat: ', cat.name);
  });
});
*/
