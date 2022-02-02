const Product = require("./db/models/Product");

exports.fetchProducts = async (productId, next) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    next(error);
  }
};

exports.getDetail = (req, res, next) => {
  try {
    const { productId } = req.params;
    const productOne = products.find((e) => e.id === +productId);
    res.status(200).json(productOne);
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
  try {
    await Product.findByIdAndDelete({
      _id: req.product.id,
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: req.product.id },
      req.body,
      { new: true, runValidators: true }
    );
    res.json(product);
  } catch (error) {
    next(error);
  }
};
