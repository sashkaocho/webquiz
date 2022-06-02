const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/order', shopController.getOrder);

router.post('/order', shopController.postOrder);

router.get('/orders', shopController.getOrders);

module.exports = router;
