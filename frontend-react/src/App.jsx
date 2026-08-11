import React, { useEffect, useState } from "react";

// This shell connects to backend/'s real API (/api/widgets) AND embeds
// frontend-angular/'s real, independently-built app via an iframe -
// genuine runtime composition of two frameworks on one page, with real
// isolation (Angular's zone.js runs in its own window/global scope, so
// it can't conflict with React's globals - the standard reason
// iframe-based micro-frontend composition exists as a real strategy).
export default function App() {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    fetch("/api/widgets")
      .then((r) => r.json())
      .then((data) => setWidgets(data.widgets))
      .catch(() => setWidgets([]));
  }, []);

  return (
    <div>
      <h1>Micro-Frontend Shell (React)</h1>
      <ul>
        {widgets.map((w) => (
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
