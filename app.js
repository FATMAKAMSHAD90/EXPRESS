const express = require("express");
let products = require("./products");
const res = require("./products");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("hello");
  res.json({ message: "Hi" });
});
app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  console.log(req.body);
  const id = products.length + 1;
  const newProduct = { ...req.body, id: id };
  products.push(newProduct);
  res.status(201);
  res.json(newProduct);
});

app.delete("/products/:productId", (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find((product) => product.id === +productId);
  if (foundProduct) {
    const newArray = products.filter((product) => product.id !== +productId);
    products = newArray;
    res.status(204).end();
  } else {
    res.status(404).end();
  }
});

app.listen(8000, () => {
  console.log("this app is running on 8000");
});
