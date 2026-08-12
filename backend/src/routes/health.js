"use strict";
const express = require("express");
const { listWidgets } = require("../data/widgets");
const router = express.Router();

const startedAt = Date.now();

router.get("/", (req, res) => {
  res.json({ status: "ok" });
});

router.get("/detail", (req, res) => {
  res.json({
    status: "ok",
    uptimeSeconds: Math.floor((Date.now() - startedAt) / 1000),
    widgetCount: listWidgets().length,
  });
});

module.exports = router;
