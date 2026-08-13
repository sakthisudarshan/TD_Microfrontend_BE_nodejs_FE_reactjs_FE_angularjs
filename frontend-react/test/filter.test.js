import { expect } from "chai";
import { filterWidgetsByLabel } from "../src/filter.js";

describe("filterWidgetsByLabel", () => {
  const widgets = [{ id: 1, label: "Alpha" }, { id: 2, label: "Beta" }];

  it("returns all widgets for an empty query", () => {
    expect(filterWidgetsByLabel(widgets, "")).to.deep.equal(widgets);
  });

  it("filters case-insensitively by label substring", () => {
    expect(filterWidgetsByLabel(widgets, "alp")).to.deep.equal([{ id: 1, label: "Alpha" }]);
  });

  it("returns an empty array for no matches", () => {
    expect(filterWidgetsByLabel(widgets, "zzz")).to.deep.equal([]);
  });
});
