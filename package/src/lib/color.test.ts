import { describe, expect, it } from "vitest";
import {
    clamp,
    hexToAlpha,
    hexToRgb,
    hsvToHex,
    parseHexColor,
    rgbToHsv,
    withAlpha,
} from "./color";

describe("clamp", () => {
    it("keeps a value inside the range", () => {
        expect(clamp(5, 0, 10)).toBe(5);
        expect(clamp(-1, 0, 10)).toBe(0);
        expect(clamp(11, 0, 10)).toBe(10);
    });
});

describe("parseHexColor", () => {
    it("expands shorthand notation", () => {
        expect(parseHexColor("#abc")).toBe("#AABBCC");
        expect(parseHexColor("abc")).toBe("#AABBCC");
    });

    it("keeps an alpha channel unless it is fully opaque", () => {
        expect(parseHexColor("#11223380")).toBe("#11223380");
        expect(parseHexColor("#112233ff")).toBe("#112233");
        expect(parseHexColor("#abcd")).toBe("#AABBCCDD");
    });

    it("rejects anything that is not a hex colour", () => {
        expect(parseHexColor("")).toBe(null);
        expect(parseHexColor(undefined)).toBe(null);
        expect(parseHexColor("#12345")).toBe(null);
        expect(parseHexColor("rgb(1,2,3)")).toBe(null);
        expect(parseHexColor("#gggggg")).toBe(null);
    });
});

describe("hexToRgb", () => {
    it("splits the channels", () => {
        expect(hexToRgb("#FF8000")).toEqual({
            red: 255,
            green: 128,
            blue: 0,
        });
    });
});

describe("hexToAlpha", () => {
    it("returns 1 for a six-digit colour", () => {
        expect(hexToAlpha("#112233")).toBe(1);
    });

    it("reads the alpha channel of an eight-digit colour", () => {
        expect(hexToAlpha("#112233FF")).toBe(1);
        expect(hexToAlpha("#11223300")).toBe(0);
    });
});

describe("withAlpha", () => {
    it("drops the alpha channel when fully opaque", () => {
        expect(withAlpha("#11223380", 1)).toBe("#112233");
    });

    it("appends the alpha channel otherwise", () => {
        expect(withAlpha("#112233", 0)).toBe("#11223300");
        expect(withAlpha("#112233", 0.5)).toBe("#11223380");
    });

    it("clamps the alpha into 0..1", () => {
        expect(withAlpha("#112233", -1)).toBe("#11223300");
        expect(withAlpha("#112233", 2)).toBe("#112233");
    });
});

describe("rgbToHsv", () => {
    it("reports no hue or saturation for greys", () => {
        expect(rgbToHsv(0, 0, 0)).toEqual({
            hue: 0,
            saturation: 0,
            brightness: 0,
        });
        expect(rgbToHsv(255, 255, 255)).toEqual({
            hue: 0,
            saturation: 0,
            brightness: 100,
        });
    });

    it("places the primaries on the colour wheel", () => {
        expect(rgbToHsv(255, 0, 0).hue).toBe(0);
        expect(rgbToHsv(0, 255, 0).hue).toBe(120);
        expect(rgbToHsv(0, 0, 255).hue).toBe(240);
    });

    it("wraps a negative hue back into 0..360", () => {
        expect(rgbToHsv(255, 0, 128).hue).toBeGreaterThan(180);
    });
});

describe("hsvToHex", () => {
    it("covers every sector of the wheel", () => {
        expect(hsvToHex(0, 100, 100)).toBe("#FF0000");
        expect(hsvToHex(60, 100, 100)).toBe("#FFFF00");
        expect(hsvToHex(120, 100, 100)).toBe("#00FF00");
        expect(hsvToHex(180, 100, 100)).toBe("#00FFFF");
        expect(hsvToHex(240, 100, 100)).toBe("#0000FF");
        expect(hsvToHex(300, 100, 100)).toBe("#FF00FF");
    });

    it("returns black and white at the extremes", () => {
        expect(hsvToHex(0, 0, 0)).toBe("#000000");
        expect(hsvToHex(0, 0, 100)).toBe("#FFFFFF");
    });

    it("round-trips through rgbToHsv", () => {
        const original = "#3B82F6";
        const { red, green, blue } = hexToRgb(original);
        const { hue, saturation, brightness } = rgbToHsv(red, green, blue);

        expect(hsvToHex(hue, saturation, brightness)).toBe(original);
    });
});
