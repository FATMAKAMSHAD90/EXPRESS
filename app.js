const express = require("express");
const productsRoutes = require("./apis/products/routes");
const app = express();

app.use(express.json());
app.use("/api/products", productsRoutes);

app.get("/", (req, res) => {
  console.log("hello");
  res.json({ message: "Hi" });
});

app.listen(8000, () => {
  console.log("this app is running on 8000");
});
