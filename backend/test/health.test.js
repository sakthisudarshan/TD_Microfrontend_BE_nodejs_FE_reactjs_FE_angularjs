"use strict";
const { expect } = require("chai");
const request = require("supertest");
const app = require("../src/app");

describe("GET /health", () => {
  it("reports ok", async () => {
    const res = await request(app).get("/health");
    expect(res.body.status).to.equal("ok");
  });
});

describe("GET /health/detail", () => {
  it("reports uptime and widget count", async () => {
    const res = await request(app).get("/health/detail");
    expect(res.body.status).to.equal("ok");
    expect(res.body.uptimeSeconds).to.be.a("number");
    expect(res.body.widgetCount).to.be.a("number");
  });
});
