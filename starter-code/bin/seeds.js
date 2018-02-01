const mongoose = require('mongoose');
const Drone = require('../models/Drone');
mongoose.connect('mongodb://localhost/drones-dev', {useMongoClient:true});

const drones = [
    {
        name: 'Alpha',
        proppellers: 4,
        maxSpeed: 40,
    },
    {
        name: 'Beta',
        proppellers: 5,
        maxSpeed: 20,
    },
    {
        name: 'Gamma',
        proppellers: 3,
        maxSpeed: 60,
    }
]

Drone.collection.drop();

drones.forEach(p =>{
    let pr = new Drone(p);
    pr.save((err,drn)=>{
        if(err){
            throw err;
        }
        console.log(`Drone guardado ${drn.name}`);
    })
})