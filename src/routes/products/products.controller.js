const {
  getAllProducts,
  getProductByType,
  getProduct,
  postNewProduct,
  updateProduct,
} = require("../../models/products/products.model");

//GET PRODUCT
async function httpGetAllProducts(req, res, next) {
  try {
    const productData = await getAllProducts();
    return res.status(200).json({
      status: "OK",
      massage: "Product get Successfully",
      data: productData,
    });
  } catch (err) {
    return res.status(400).json({
      status: "failed",
      error: err.massage,
    });
  }
}

async function httpGetProductByType(req, res, next) {
  try {
    const {type} = req.query;
    const productData = await getProductByType(type);
    if(productData.length <= 0) return res.status(400).json({
      status: "failed",
      error: "Not Found",
    });
    return res.status(200).json({
      status: "OK",
      massage: "Product get Successfully",
      data: productData,
    });
  } catch (err) {
    return res.status(400).json({
      status: "failed",
      error: err.massage,
    });
  }
}

// GET PRODUCT BY ID
async function httpGetProductById(req, res, next) {
  try {
    const { id } = req.params;
    const product = await getProduct(id);
    if(product.length != 1) return res.status(400).json({ status: "failed", error: "product not found" });
    return res.status(200).json({
      status: "OK",
      massage: "Product get Successfully",
      data: product,
    });
  } catch (err) {
    return res.status(400).json({ status: "failed", error: err.massage });
  }
}

// POST Product
async function httpPostProduct(req, res, next) {
  try {
    const product = req.body;
    await postNewProduct(product);
    return res.status(200).json({
      status: "OK",
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({ status: "failed", error: error.message });
  }
}

// PUT Product Update
async function httpProductUpdate(req, res, next) {
  try {
    const product = req.body;
    const {id} = req.params;
    await updateProduct(id,product);
    return res.status(200).json({
      status: "OK",
      message: "Product update successfully",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({ status: "failed", error: error.message });
  }
}

module.exports = { httpGetAllProducts,httpGetProductByType, httpGetProductById, httpPostProduct,httpProductUpdate };
