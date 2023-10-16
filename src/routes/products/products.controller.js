const {
  getAllProducts,
  postNewProduct,
} = require("../../models/products/products.model");

async function httpGetAllProducts(req, res, next) {
  return res.status(200).json(await getAllProducts());
}
async function httpPostProduct(req, res, next) {
  try {
    const product = req.body;
    await postNewProduct(product);
    return res.status(200).json({
      status: "success",
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(400).json({ status: 'failed', error: error.message });
  }
}

module.exports = { httpGetAllProducts, httpPostProduct };
