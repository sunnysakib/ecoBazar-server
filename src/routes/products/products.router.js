const express = require('express');
const { httpGetAllProducts,httpGetProductByType,httpGetProductById, httpPostProduct, httpProductUpdate } = require('./products.controller');

const productsRouter = express.Router();


productsRouter.get('/', httpGetAllProducts);
productsRouter.get('/type', httpGetProductByType);
productsRouter.get('/:id', httpGetProductById);
productsRouter.post('/', httpPostProduct);
productsRouter.put('/:id', httpProductUpdate);

module.exports = productsRouter;