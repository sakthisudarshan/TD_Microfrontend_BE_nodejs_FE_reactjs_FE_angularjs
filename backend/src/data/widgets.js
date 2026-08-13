"use strict";
const INITIAL_WIDGETS = [{ id: 1, label: "Micro-frontend proof widget" }];
let widgets = INITIAL_WIDGETS.map((w) => ({ ...w }));
let nextId = 2;

function listWidgets() {
  return widgets;
}

function createWidget(label) {
  const widget = { id: nextId++, label };
  widgets.push(widget);
  return widget;
}

function resetWidgets() {
  widgets = INITIAL_WIDGETS.map((w) => ({ ...w }));
  nextId = 2;
}

module.exports = { listWidgets, createWidget, resetWidgets };
