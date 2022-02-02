const express = require("express");
const router = express.Router();
const {
  fetchProducts,
  createProducts,
  deleteProducts,
  getDetail,
  updateProduct,
} = require("./controller");

router.param("productId", async (req, res, next, productId) => {
  const product = await fetchProducts(productId, next);
  if (product) {
    req.product = product;
    next();
  } else {
    next({ status: 404, message: "OOPS, product not found" });
  }
});

router.get("/", fetchProducts);

router.get("/:productId", getDetail);

router.post("/", createProducts);

router.delete("/:productId", deleteProducts);

router.put("/:productId", updateProduct);

module.exports = router;
