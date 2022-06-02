const Product = require('../models/product');
const User = require('../models/user');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const quantity = req.body.quantity;
  req.user
    .createProduct({
      title: title,
      price: price,
      quantity: quantity,
    })
    .then((result) => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAddUser = (req, res, next) => {
  res.render('admin/add-user', {
    pageTitle: 'Add User',
    path: '/admin/add-user',
  });
};
