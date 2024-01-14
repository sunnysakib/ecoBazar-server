const productDB = require('./product.mongo')

async function getAllProducts () {
    const product = await productDB.find({});
    return product;
}
async function getProductByType (type) {
    const product = await productDB.find({product_type: type});
    return product;
}
async function getProduct (id) {
    return await productDB.find({_id: id});
}

async function postNewProduct (product) {
    return await productDB.create(product);
}
async function updateProduct (id,product) {
    return await productDB.findByIdAndUpdate(id, product);
}

module.exports = {
    getAllProducts,
    getProductByType,
    getProduct,
    postNewProduct,
    updateProduct
}