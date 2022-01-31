let products = require("./products");
const Product = require("./db/models/Product");

exports.fetchProducts = async (req, res) => {
  try {
    const productArray = await Product.find({}).select(
      "name description price color"
    );
    res.json(productArray);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDetail = (req, res) => {
  try {
    const { productId } = req.params;
    const productOne = products.find((e) => e.id === +productId);
    res.status(200).jsom(productOne);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProducts = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProducts = async (req, res) => {
  const { productId } = req.params;
  try {
    const foundProduct = await Product.findByIdAndDelete({ _id: productId });
    if (foundProduct) res.status(204).end();
    else res.status(404).end();
  } catch (error) {
    res.status(500).jsom({ message: error.message });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndUpdate(
      { _id: productId },
      req.body,
      { new: true }
    );
    if (product) res.json(product);
    else res.status(404).json({ message: "not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
