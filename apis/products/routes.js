const express = require("express");
const router = express.Router();
const {
  fetchProducts,
  createProducts,
  deleteProducts,
  getDetail,
  updateProduct,
} = require("./controller");

router.get("/", fetchProducts);

router.get("/:productId", getDetail);

router.post("/", createProducts);

router.delete("/:productId", deleteProducts);

router.put("/:productId", updateProduct);

module.exports = router;
