const mangoose = require("mangoose");

const ProductSchema = mangoose.Schema({
  name: String,
  image: String,
  description: String,
  color: String,
  quantity: Number,
  price: Number,
});
module.exports = mangoose.model("Product", ProductSchema);
