const express = require("express");
const productsRoutes = require("./apis/products/routes");
const connectDB = require("./apis/products/db/database");
const {
  logger,
  notFoundPage,
  errorHandelers,
} = require("./middleware/loggers");
const PORT = 8000;
const app = express();

app.use(express.json());
app.use("api/products", productsRoutes);
app.use(errorHandelers);

app.use(notFoundPage);
app.use(logger);

connectDB();
app.listen(8000, () => {
  console.log("this app is running on 8000");
});
