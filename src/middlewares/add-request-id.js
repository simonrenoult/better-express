const crypto = require("crypto");

module.exports = () => (req, res, next) => {
  const id = crypto.randomBytes(16).toString("hex");

  req.headers["x-request-id"] = id;
  res.set("x-request-id", id);
  req.id = id;

  next();
};