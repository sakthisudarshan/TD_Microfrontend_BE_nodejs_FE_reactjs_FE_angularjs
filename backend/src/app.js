"use strict";
const express = require("express");
const widgetsRouter = require("./routes/widgets");
const healthRouter = require("./routes/health");

const app = express();
app.use(express.json());

app.use("/api/widgets", widgetsRouter);
app.use("/health", healthRouter);

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`microfrontend-backend listening on ${port}`));
}

module.exports = app;
