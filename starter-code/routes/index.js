var express = require('express');
var router = express.Router();
var Drones = require("../models/drone");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'yes' });
});


// router.get('/drones', function(req, res, next) {
//   Drones.find({}, (err, results) => {
//     if (err){
//       console.log("ERROR", err);
//       next(err);
//       return;
//     }
//     else {
//       res.render('drones/index', {title: "yes", results});
//     }
//   })
// });
module.exports = router;
