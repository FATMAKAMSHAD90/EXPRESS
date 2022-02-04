const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  description: String,
  color: String,
  quantity: { type: Number, min: 0 },
  price: { type: Number, default: 1 },

  shop: { type: mongoose.Schema.Types.ObjectId, ref: "Shop" },
});

module.exports = mongoose.model("Product", ProductSchema);
