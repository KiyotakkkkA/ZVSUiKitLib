import { describe, expect, it } from "vitest";
import {
    defaultDictionary,
    enDictionary,
    mergeDictionary,
} from "./dictionary";

describe("mergeDictionary", () => {
    it("returns the base untouched when there are no overrides", () => {
        expect(mergeDictionary(defaultDictionary)).toBe(defaultDictionary);
    });

    it("replaces one string and keeps the rest of its group", () => {
        const merged = mergeDictionary(enDictionary, {
            select: { emptyMessage: "No matching options" },
        });

        expect(merged.select.emptyMessage).toBe("No matching options");
        expect(merged.select.placeholder).toBe(enDictionary.select.placeholder);
    });

    it("leaves groups that were not overridden alone", () => {
        const merged = mergeDictionary(enDictionary, {
            select: { emptyMessage: "x" },
        });

        expect(merged.modal).toEqual(enDictionary.modal);
    });

    it("does not mutate the base dictionary", () => {
        const before = enDictionary.select.emptyMessage;
        mergeDictionary(enDictionary, { select: { emptyMessage: "x" } });

        expect(enDictionary.select.emptyMessage).toBe(before);
    });

    it("keeps the two shipped dictionaries structurally identical", () => {
        expect(Object.keys(enDictionary)).toEqual(
            Object.keys(defaultDictionary),
        );

        for (const group of Object.keys(enDictionary) as Array<
            keyof typeof enDictionary
        >) {
            expect(Object.keys(enDictionary[group])).toEqual(
                Object.keys(defaultDictionary[group]),
            );
        }
    });
});
