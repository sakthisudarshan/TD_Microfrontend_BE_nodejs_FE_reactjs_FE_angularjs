import React, { useEffect, useState } from "react";
import { formatWidgetCount } from "./widgets";
import { filterWidgetsByLabel } from "./filter";
import SearchBar from "./components/SearchBar";
import Toolbar from "./components/Toolbar";

// This shell connects to backend/'s real API (/api/widgets) AND embeds
// frontend-angular/'s real, independently-built app via an iframe -
// genuine runtime composition of two frameworks on one page, with real
// isolation (Angular's zone.js runs in its own window/global scope, so
// it can't conflict with React's globals - the standard reason
// iframe-based micro-frontend composition exists as a real strategy).
export default function App() {
  const [widgets, setWidgets] = useState([]);
  const [query, setQuery] = useState("");

  const loadWidgets = () => {
    fetch("/api/widgets")
      .then((r) => r.json())
      .then((data) => setWidgets(data.widgets))
      .catch(() => setWidgets([]));
  };

  useEffect(loadWidgets, []);

  const handleCreate = (label) => {
    fetch("/api/widgets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ label }),
    })
      .then(() => loadWidgets())
      .catch(() => {});
  };

  const visible = filterWidgetsByLabel(widgets, query);

  return (
    <div>
      <h1>Micro-Frontend Shell (React)</h1>
      <p>{formatWidgetCount(widgets.length)}</p>
      <Toolbar onCreate={handleCreate} />
      <SearchBar value={query} onChange={setQuery} />
      <ul>
        {visible.map((w) => (
          <li key={w.id}>{w.label}</li>
        ))}
      </ul>
      <hr />
      <h2>Angular remote (embedded live):</h2>
      <iframe
        title="angular-remote"
        src="/angular-remote/index.html"
        style={{ width: "100%", height: 200, border: "1px solid #ccc" }}
      />
    </div>
  );
}
