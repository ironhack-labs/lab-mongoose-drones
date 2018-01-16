// const express = require('express');
//
// // require the Drone model here
//
// const router = express.Router();
// const Drone = require('../models/drone.model')
//
// router.get('/', (req, res, next) => {
//   Drone.find({})
//     .then((drone) => {
//       res.render('drones/index', {
//         drone: drone
//       })
//     })
//     .catch((err) => {
//       next(err)
//     })
// });
//
//
// router.get('/new', (req, res, next) => {
//   res.render('drones/new')
// });
//
// router.post('/', (req, res, next) => {
//   const droneData = req.body;
//   const newDrone = new Drone(droneData)
//   newDrone.save().then((drone) =>{
//     res.redirect('/drones');
//   })
// });
//
// module.exports = router;
//

const express = require('express');
const router = express.Router();
const dronesController = require('../controllers/drones.controller');

router.get('/', dronesController.index);
router.get('/new', dronesController.new);
router.post('/', dronesController.create);
router.get('/:id/edit', dronesController.edit);
router.post('/:id', dronesController.update);
router.post('/:id/delete', dronesController.delete);

module.exports = router;
