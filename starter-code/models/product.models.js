const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
