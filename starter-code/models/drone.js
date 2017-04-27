// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');



const Schema = mongoose.Schema;

const DroneSchema = new Schema({
  droneName: String,
  propellers: Number,
  maxSpeed: Number,
})

const Drone = mongoose.model('Drone', DroneSchema);

module.exports = Drone;
