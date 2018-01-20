//Nota: ejercicio realizado en PP con Mario Velasco
//en clase casi terminamos el ejercicio, así que he copiado directamente su repo
//y el resto estoy intentando hacerlo yo

const express        = require('express');
const path           = require('path');
const favicon        = require('serve-favicon');
const logger         = require('morgan');
const cookieParser   = require('cookie-parser');
const bodyParser     = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const mongoose       = require('mongoose');

require('./config/db.config'); // Import DB config - 
// asignarlo a una constante me lo he inventado pero me pone nerviosos que todos los requiere van así y este no. es correcto?? 

const index = require('./routes/index.routes');
const drones = require('./routes/drones.routes');

const app = express();
app.locals.title = 'Los Drones de Ironhack';

///////////////
//MIDDLEWARES//
///////////////
app.use(expressLayouts);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// routes
app.use('/', index);
app.use('/drones', drones);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
