const express = require("express");
const router = express.Router();
const {
  fetchShop,
  createShop,
  deleteShop,
  getDetail,
  updateShop,
  createProducts,
} = require("./controller");

router.param("shopId", async (req, res, next, shopId) => {
  const shop = await fetchShop(shopId, next);
  if (shop) {
    req.shop = shop;
    next();
  } else {
    next({ status: 404, message: "OOPS, shop not found" });
  }
});

router.get("/", fetchShop);

router.get("/:shopId", getDetail);

router.post("/", createShop);
router.post("/:shopId/products", createProducts);

router.delete("/:shopId", deleteShop);

router.put("/:shopId", updateShop);

module.exports = router;
