import { describe, expect, it } from "vitest";
import { clamp, computeMenuPosition, type Rect } from "./position";

const trigger: Rect = {
    top: 200,
    right: 300,
    bottom: 240,
    left: 100,
    width: 200,
};

const viewport = { width: 1000, height: 800 };
const menu = { width: 120, height: 100 };

const position = (placement: Parameters<typeof computeMenuPosition>[0]["placement"]) =>
    computeMenuPosition({
        trigger,
        menu,
        placement,
        viewport,
        gap: 8,
        padding: 8,
    });

describe("clamp", () => {
    it("returns the minimum when the range is inverted", () => {
        expect(clamp(50, 10, 5)).toBe(10);
    });
});

describe("computeMenuPosition", () => {
    it("puts a bottom placement below the trigger", () => {
        expect(position("bottom-left")).toEqual({ left: 100, top: 248 });
    });

    it("puts a top placement above the trigger", () => {
        expect(position("top-left")).toEqual({ left: 100, top: 92 });
    });

    it("aligns a right placement to the trigger's right edge", () => {
        expect(position("bottom-right").left).toBe(180);
    });

    it("centres a center placement on the trigger", () => {
        expect(position("bottom-center").left).toBe(140);
    });

    it("keeps the menu inside the viewport", () => {
        const offscreen = computeMenuPosition({
            trigger: { top: 10, right: 995, bottom: 40, left: 900, width: 95 },
            menu,
            placement: "bottom-left",
            viewport,
            gap: 8,
            padding: 8,
        });

        expect(offscreen.left).toBe(872);
    });

    it("never pushes the menu past the top-left padding", () => {
        const tooTall = computeMenuPosition({
            trigger,
            menu: { width: 120, height: 900 },
            placement: "top-left",
            viewport,
            gap: 8,
            padding: 8,
        });

        expect(tooTall.top).toBe(8);
    });
});
