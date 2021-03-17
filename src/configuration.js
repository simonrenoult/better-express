const dotenv = require("dotenv");
const nconf = require("nconf");

class Configuration {
  constructor() {
    dotenv.config()

    this._configuration = nconf
      .env({
        lowerCase: true,
        parseValue: true
      })
      .defaults({
        applicationName: "better-express",
        log_level: "info",
        node_env: "development",
        port: 1337,
        redis_url: 'redis://127.0.0.1:6379/1',
        redis: false
      });
  }

  get (key) {
    const val = this._configuration.get(key)
    console.log(key, val)
    this._configuration.get('log_level')
    return val
  }

  set (key, value) {
    this._configuration.set('log_level', 'error')
    this._configuration.set(key, value)
    console.log(key, value)
    console.log('>', this._configuration.get(key))
  }
}

module.exports = Configuration;
