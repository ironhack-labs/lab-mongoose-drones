const Product = require('../models/product.model');

module.exports.index = (req, res, next) => {
  Product.find({}).then((products) => {
    res.render('products/index', {
      products: products
    });
  });
};

module.exports.new = (req, res, next) => {
  res.render('products/form', {
    product: new Product()
  });
};

module.exports.create = (req, res, next) => {
  const productData = req.body;

  const newProduct = new Product(productData);

  newProduct.save().then((product) => {
    res.redirect('/products');
  })
};

module.exports.show = (req, res, next) => {
  Product.findById(req.params.id).then((product) => {
    res.render('products/show', {
      product: product
    });
  });
};


module.exports.edit = (req, res, next) => {
  Product.findById(req.params.id).then((product) => {
    res.render('products/form', {
      product: product
    });
  });
};

module.exports.update = (req, res, next) => {
  const productId = req.params.id;
  const updates = {
      name: req.body.name,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
      description: req.body.description
  };

  Product.findByIdAndUpdate(productId, updates).then((product) => {
    res.redirect('/products');
  });
};

module.exports.delete = (req, res, next) => {
  const productId = req.params.id;

  Product.findByIdAndRemove(productId).then((product) => {
    return res.redirect('/products');
  });
};
