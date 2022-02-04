const Shop = require("../../apis/products/db/models/Shop");

exports.fetchShop = async (ShopId, next) => {
  try {
    const shop = await Shop.find().populate("product", "name price");
    return shop;
  } catch (error) {
    next(error);
  }
};

exports.getDetail = (req, res, next) => {
  try {
    const { shopId } = req.params;
    const shopOne = Shop.find((e) => e.id === +shopId);
    res.status(200).json(shopOne);
  } catch (error) {
    next(error);
  }
};

exports.createShop = async (req, res, next) => {
  try {
    const newShopt = await Shop.create(req.body);
    res.status(201).json(newShop);
  } catch (error) {
    next(error);
  }
};

exports.deleteShop = async (req, res, next) => {
  try {
    await Shop.findByIdAndDelete({
      _id: req.shop.id,
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
exports.updateShop = async (req, res, next) => {
  try {
    const shop = await Shop.findByIdAndUpdate({ _id: req.shop.id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.json(shop);
  } catch (error) {
    next(error);
  }
};
exports.createProducts = async (req, res, next) => {
  try {
    const { shopId } = req.params;
    req.body.shop = shopId;
    const newProduct = await Product.create(req.body);
    await Shop.findByIdAndUpdate(
      { _id: shopId },
      { $push: { products: newProduct._id } }
    );
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};
