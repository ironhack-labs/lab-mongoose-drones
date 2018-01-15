const Drone = require('../models/drone');

module.exports.index = (req, res, next) => {
  Drones.find({}).then((products) => {
    res.render('/drones', {
      products: products
    });
  });
};
