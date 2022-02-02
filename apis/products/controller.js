let products = require("./products");
const Product = require("./db/models/Product");

exports.fetchProducts = async (req, res, next) => {
  try {
    const productArray = await Product.find({}).select(
      "name description price color"
    );
    res.json(productArray);
  } catch (error) {
    next(error);
  }
};

exports.getDetail = (req, res, next) => {
  try {
    const { productId } = req.params;
    const productOne = products.find((e) => e.id === +productId);
    res.status(200).jsom(productOne);
  } catch (error) {
    next(error);
  }
};

exports.createProducts = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

exports.deleteProducts = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const foundProduct = await Product.findByIdAndDelete({ _id: productId });
    if (foundProduct) res.status(204).end();
    else next({ status: 404, message: "Product not found" });
  } catch (error) {
    next(error);
  }
};
exports.updateProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndUpdate(
      { _id: productId },
      req.body,
      { new: true, runValidators: true }
    );
    if (product) res.json(product);
    else next({ status: 404, message: "Product not found" });
  } catch (error) {
    next(error);
  }
};
