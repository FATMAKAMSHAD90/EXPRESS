const express = require("express");
const router = express.Router();
const {
  fetchProducts,
  createProducts,
  deleteProducts,
} = require("./controllers");

router.get("/", fetchProducts);

router.post("/", createProducts);

router.delete("/:productId", deleteProducts);
module.exports = router;
