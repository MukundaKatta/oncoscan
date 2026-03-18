import { describe, it, expect } from "vitest";
import { Oncoscan } from "../src/core.js";
describe("Oncoscan", () => {
  it("init", () => { expect(new Oncoscan().getStats().ops).toBe(0); });
  it("op", async () => { const c = new Oncoscan(); await c.process(); expect(c.getStats().ops).toBe(1); });
  it("reset", async () => { const c = new Oncoscan(); await c.process(); c.reset(); expect(c.getStats().ops).toBe(0); });
});
