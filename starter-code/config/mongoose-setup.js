const mongoose=require ("mongoose");

//use native javascript promises in Mongoose commands
mongoose.Promise=Promise;

//connect Mongoose to our app's local database
mongoose.connect("mongodb://localhost/drones-dev", {useMongoClient:true})
  .then(()=>{
    console.log("Mongoose is connected!");
  })
  .catch((err)=>{
    console.log(err);
  });
