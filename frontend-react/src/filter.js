export function filterWidgetsByLabel(widgets, query) {
  const q = query.trim().toLowerCase();
  if (!q) return widgets;
  return widgets.filter((w) => w.label.toLowerCase().includes(q));
}
