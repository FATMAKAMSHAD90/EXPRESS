exports.fetchProducts = (req, res) => {
  res.json(products);
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
