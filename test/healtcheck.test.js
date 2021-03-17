const { after, before, describe, it } = require("mocha");
const got = require("got");
const { expect } = require("chai");
const application = require("../src/application");
const { createServer } = require("http");

describe("GET /", () => {
  let server;
  before(() => {
    server = createServer(application);
    server.listen(1338);
  });

  after(() => {
    server.close();
  });

  describe("When redis is down and api is up", () => {
    it("returns", async () => {
      const response = await got("http://localhost:1338");
      expect(response.body.api).to.be.true;
    });
  });
});
