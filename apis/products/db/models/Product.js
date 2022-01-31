const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: String,
  image: String,
  description: String,
  color: String,
  quantity: Number,
  price: Number,
});
module.exports = mongoose.model("Product", ProductSchema);
