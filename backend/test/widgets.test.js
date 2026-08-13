"use strict";
const { expect } = require("chai");
const request = require("supertest");
const app = require("../src/app");
const { resetWidgets } = require("../src/data/widgets");

describe("GET /api/widgets", () => {
  beforeEach(resetWidgets);

  it("returns the widget list", async () => {
    const res = await request(app).get("/api/widgets");
    expect(res.status).to.equal(200);
    expect(res.body.widgets).to.have.length(1);
  });

  it("creates a new widget", async () => {
    const res = await request(app).post("/api/widgets").send({ label: "Second widget" });
    expect(res.status).to.equal(201);
    const list = await request(app).get("/api/widgets");
    expect(list.body.widgets).to.have.length(2);
  });

  it("400s when creating without a label", async () => {
    const res = await request(app).post("/api/widgets").send({});
    expect(res.status).to.equal(400);
  });
});
