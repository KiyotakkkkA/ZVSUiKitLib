import { describe, expect, it } from "vitest";
import {
    defaultThemePalette,
    getThemeVariables,
    isStyleThemePalette,
    parseThemePalette,
    readThemePaletteFromCookieHeader,
    serializeThemePalette,
    STYLE_THEME_COOKIE,
} from "./theme";

describe("isStyleThemePalette", () => {
    it("accepts the default palette", () => {
        expect(isStyleThemePalette(defaultThemePalette)).toBe(true);
    });

    it("rejects non-objects and incomplete palettes", () => {
        expect(isStyleThemePalette(null)).toBe(false);
        expect(isStyleThemePalette("#fff")).toBe(false);
        expect(isStyleThemePalette({ main: {} })).toBe(false);
        expect(
            isStyleThemePalette({ ...defaultThemePalette, danger: undefined }),
        ).toBe(false);
    });

    it("rejects colours that could break out of a declaration", () => {
        expect(
            isStyleThemePalette({
                ...defaultThemePalette,
                accent: {
                    ...defaultThemePalette.accent,
                    medium: "red; background: url(evil)",
                },
            }),
        ).toBe(false);
    });

    it("rejects an over-long colour", () => {
        expect(
            isStyleThemePalette({
                ...defaultThemePalette,
                accent: {
                    ...defaultThemePalette.accent,
                    medium: "a".repeat(129),
                },
            }),
        ).toBe(false);
    });
});

describe("serializeThemePalette", () => {
    it("round-trips through parseThemePalette", () => {
        const serialized = serializeThemePalette(defaultThemePalette);

        expect(parseThemePalette(serialized)).toEqual(defaultThemePalette);
    });

    it("refuses to serialize an invalid palette", () => {
        expect(() =>
            serializeThemePalette(
                { main: {} } as unknown as typeof defaultThemePalette,
            ),
        ).toThrow();
    });
});

describe("parseThemePalette", () => {
    it("returns null for empty, oversized and malformed input", () => {
        expect(parseThemePalette(undefined)).toBe(null);
        expect(parseThemePalette("")).toBe(null);
        expect(parseThemePalette("a".repeat(4097))).toBe(null);
        expect(parseThemePalette("not-json")).toBe(null);
    });
});

describe("readThemePaletteFromCookieHeader", () => {
    it("finds the palette among other cookies", () => {
        const serialized = serializeThemePalette(defaultThemePalette);
        const header = `other=1; ${STYLE_THEME_COOKIE}=${serialized}; last=2`;

        expect(readThemePaletteFromCookieHeader(header)).toEqual(
            defaultThemePalette,
        );
    });

    it("returns null when the cookie is absent", () => {
        expect(readThemePaletteFromCookieHeader("other=1")).toBe(null);
        expect(readThemePaletteFromCookieHeader(undefined)).toBe(null);
    });
});

describe("getThemeVariables", () => {
    it("emits one custom property per token", () => {
        const variables = getThemeVariables(defaultThemePalette);

        expect(Object.keys(variables)).toHaveLength(25);
        expect(variables["--color-main-500"]).toBe("#737373");
        expect(variables["--color-danger-medium"]).toBe("#ef4444");
    });
});
