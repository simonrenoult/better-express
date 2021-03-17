const Redis = require("ioredis");

class Database {
  constructor({ logger, configuration }) {
    const redisUrl = configuration.get('redis_url');
    const redis = new Redis(redisUrl);
    this.redis = redis;

    redis.on('connect', () => {
      logger.info(`redis connected and running at ${redisUrl}`);
      configuration.set('redis', true)
    });
  }
}

module.exports = Database;
