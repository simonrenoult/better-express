const Redis = require("ioredis");

class Database {
  constructor({ logger, configuration }) {
    const redisUrl = configuration.get("redis.url");
    this.redis = new Redis(redisUrl);
    this._isConnected = false;

    this.redis.on("connect", () => {
      logger.info(`redis connected and running at ${redisUrl}`);
      this._isConnected = true;
    });
  }

  isConnected() {
    return this._isConnected;
  }
}

module.exports = Database;
