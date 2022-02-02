const express = require("express");
const productsRoutes = require("./apis/products/routes");
const connectDB = require("./apis/products/db/database");
const PORT = 8000;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.path}`);
  next();
});

app.use("api/products", productsRoutes);
//Midlleware
app.use((req, res) => {
  res.status(404).json({ message: "path not found" });
});
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal server issues" });
});

connectDB();
app.listen(8000, () => {
  console.log("this app is running on 8000");
});
