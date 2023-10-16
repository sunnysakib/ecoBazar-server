const productDB = require('./product.mongo')
async function getAllProducts () {
    return await productDB.find();
}
async function postNewProduct (product) {
    const newProduct = await productDB.create(product);
}

module.exports = {
    getAllProducts,
    postNewProduct
}