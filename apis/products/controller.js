let products = require("./products");
const Product = require("./db/models/Product");

exports.fetchProducts = async (req, res) => {
  try {
    const productArray = await Product.find();
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
    res.status(500).json({ message: error });
  }
};

exports.createProducts = (req, res) => {
  console.log(req.body);
  const id = products.length + 1;
  const newProduct = { ...req.body, id: id };
  products.push(newProduct);
  res.status(201);
  res.json(newProduct);
};
exports.deleteProducts = (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find((product) => product.id === +productId);
  if (foundProduct) {
    const newArray = products.filter((product) => product.id !== +productId);
    products = newArray;
    res.status(204).end();
  } else {
    res.status(404).end();
  }
};
