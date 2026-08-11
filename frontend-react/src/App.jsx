import React, { useEffect, useState } from "react";

// This shell connects to backend/'s real API (/api/widgets) rather than
// carrying its own copy of the same JavaScript tool-trigger fixtures —
// backend/quality/ is the single source for JS tooling in this branch.
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
    </div>
  );
}
