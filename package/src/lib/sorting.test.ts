import { describe, expect, it } from "vitest";
import { nextSortState, UNSORTED } from "./sorting";

const modes = ["asc", "desc"];

describe("nextSortState", () => {
    it("does nothing for a column without sort modes", () => {
        expect(nextSortState(UNSORTED, "name", [])).toEqual(UNSORTED);
    });

    it("starts a new column at its first mode", () => {
        expect(nextSortState(UNSORTED, "name", modes)).toEqual({
            columnKey: "name",
            modeKey: "asc",
        });
    });

    it("advances through the modes of the active column", () => {
        expect(
            nextSortState({ columnKey: "name", modeKey: "asc" }, "name", modes),
        ).toEqual({ columnKey: "name", modeKey: "desc" });
    });

    it("returns to unsorted after the last mode", () => {
        expect(
            nextSortState(
                { columnKey: "name", modeKey: "desc" },
                "name",
                modes,
            ),
        ).toEqual(UNSORTED);
    });

    it("switching columns restarts at the first mode", () => {
        expect(
            nextSortState({ columnKey: "name", modeKey: "desc" }, "age", modes),
        ).toEqual({ columnKey: "age", modeKey: "asc" });
    });

    it("restarts when the active mode is no longer available", () => {
        expect(
            nextSortState(
                { columnKey: "name", modeKey: "gone" },
                "name",
                modes,
            ),
        ).toEqual({ columnKey: "name", modeKey: "asc" });
    });
});
