const express = require('express');
const { httpGetAllProducts, httpPostProduct } = require('./products.controller');

const productsRouter = express.Router();


productsRouter.get('/', httpGetAllProducts);
productsRouter.post('/', httpPostProduct);

module.exports = productsRouter;