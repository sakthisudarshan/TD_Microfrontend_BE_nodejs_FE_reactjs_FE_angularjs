"use strict";

const express = require("express");

const app = express();
app.use(express.json());

// Minimal shared API — both frontend-react (shell) and frontend-angular
// (remote) connect to this, rather than each carrying their own copy of
// the same backend logic.
app.get("/api/widgets", (req, res) => {
  res.json({ widgets: [{ id: 1, label: "Micro-frontend proof widget" }] });
});

app.get("/health", (req, res) => res.json({ status: "ok" }));

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`microfrontend-backend listening on ${port}`));
}

module.exports = app;
