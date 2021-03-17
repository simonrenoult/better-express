const { createServer } = require("http");

const application = require("../src/application");
const server = createServer(application);

const logger = application.get('logger');
const configuration = application.get('configuration');
const port = configuration.get('port');

server.listen(port);

server.on('listening', () => {
  const { address } = server.address();
  const host = `http://${address}:${port}`;
  logger.info(`server up and running at ${host}`);
});

process.on('uncaughtException', err => {
  logger.error(err, 'There was an uncaught error');
  process.exit(1);
});
