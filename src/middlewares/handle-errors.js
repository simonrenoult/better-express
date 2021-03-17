const httpStatus = require("http-status");

module.exports = () => (err, req, res, next) => {
  if (!err && !(err instanceof Error)) return next();

  req.logger.error({ req, err, stack: err.stack });

  const statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  return res.status(statusCode).send(err);
};
