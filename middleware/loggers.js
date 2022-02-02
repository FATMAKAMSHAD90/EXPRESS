exports.errorHandelers = (err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal server issues" });
};
exports.notFoundPage = (req, res) => {
  res.status(404).json({ message: "path not found" });
};
exports.logger = (req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.path}`);
  next();
};
