const express = require("express");
const router = express.Router();
const {
  fetchProducts,
  createProducts,
  deleteProducts,
  getDetail,
} = require("./controller");

router.get("/", fetchProducts);

router.get("/:productId", getDetail);

router.post("/", createProducts);

router.delete("/:productId", deleteProducts);

module.exports = router;
