const express = require("express");
const productsRoutes = require("./apis/products/routes");
const connectDB = require("./apis/products/db/database");
const app = express();
app.use(express.json());
app.use("api/products", productsRoutes);

connectDB();
app.listen(8000, () => {
  console.log("this app is running on 8000");
});
