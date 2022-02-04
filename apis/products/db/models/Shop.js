const mongoose = require("mongoose");

const ShopSchema = mongoose.Schema({
  name: String,
  image: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});
module.exports = mongoose.model("Shop", ShopSchema);
