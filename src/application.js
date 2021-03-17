const bodyParser = require('body-parser')
const compression = require("compression");
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const pinoHttp = require('pino-http');
const responseTime = require("response-time");

const logger = require('./logger');
const Configuration = require('./configuration');
const Database = require('./database');
const addRequestId = require('./middlewares/add-request-id')
const handleErrors = require('./middlewares/handle-errors')

const app = express();
const configuration = new Configuration();
const database = new Database({ logger, configuration });

app.set("configuration", configuration);
app.set("logger", logger);
app.set("database", database);

app.use(addRequestId());
app.use(compression());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet());
app.use(pinoHttp({ logger, useLevel: configuration.get('log_level'), genReqId: (req) => req.id }))
app.use(responseTime());

app.get('/', (req, res) => {
  res.send({
    api: true,
    redis: configuration.get('redis')
  })
})

app.use(handleErrors());

module.exports = app;
