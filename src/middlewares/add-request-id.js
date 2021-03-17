const uuid = require("uuid");

module.exports = () => (req, res, next) => {
  const id = uuid.v4();

  req.headers["X-Request-Id"] = id;
  res.setHeader("X-Request-Id", id);
  req.id = id;

  next();
};
