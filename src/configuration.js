const dotenv = require("dotenv");
const convict = require("convict");

class Configuration {
  constructor() {
    dotenv.config();

    this._configuration = convict({
      env: {
        doc: "The application environment.",
        format: ["production", "development", "test"],
        default: "development",
        env: "NODE_ENV",
      },
      log: {
        level: {
          doc: "Logger level to use.",
          format: "*",
          default: "info",
        },
      },
      api: {
        port: {
          doc: "API port to bind.",
          format: "port",
          default: 8080,
          env: "PORT",
          arg: "port",
        },
      },
      redis: {
        url: {
          doc: "Redis URL.",
          format: "*",
          default: "redis://127.0.0.1:6379/1",
        },
      },
    });
  }

  get(key) {
    return this._configuration.get(key);
  }
}

module.exports = Configuration;
