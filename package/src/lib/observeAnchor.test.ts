import { afterEach, describe, expect, it, vi } from "vitest";
import { observeAnchor } from "./observeAnchor";

afterEach(() => vi.unstubAllGlobals());

describe("observeAnchor", () => {
    it("follows ancestor movement without resize or scroll and stops on cleanup", () => {
        let nextFrame: FrameRequestCallback = () => {};
        const cancel = vi.fn();
        const remove = vi.fn();
        vi.stubGlobal(
            "requestAnimationFrame",
            (callback: FrameRequestCallback) => {
                nextFrame = callback;
                return 42;
            },
        );
        vi.stubGlobal("cancelAnimationFrame", cancel);
        vi.stubGlobal("ResizeObserver", undefined);
        vi.stubGlobal("window", {
            addEventListener: vi.fn(),
            removeEventListener: remove,
        });
        const rect = { left: 100, top: 200, width: 150, height: 40 };
        const trigger = { getBoundingClientRect: () => rect } as HTMLElement;
        const content = {
            offsetWidth: 220,
            offsetHeight: 100,
            getAttribute: () => "auto",
        } as unknown as HTMLElement;
        const update = vi.fn();
        const cleanup = observeAnchor(trigger, content, update);
        expect(update).toHaveBeenCalledTimes(1);
        nextFrame(0);
        expect(update).toHaveBeenCalledTimes(1);
        rect.left = 180;
        rect.top = 240;
        nextFrame(16);
        expect(update).toHaveBeenCalledTimes(2);
        cleanup();
        expect(cancel).toHaveBeenCalledWith(42);
        expect(remove).toHaveBeenCalledWith(
            "scroll",
            expect.any(Function),
            true,
        );
        expect(remove).toHaveBeenCalledWith("resize", expect.any(Function));
    });

    it("ignores scroll and resize events that do not move the anchor", () => {
        const listeners = new Map<string, () => void>();
        vi.stubGlobal("requestAnimationFrame", () => 1);
        vi.stubGlobal("cancelAnimationFrame", vi.fn());
        vi.stubGlobal("ResizeObserver", undefined);
        vi.stubGlobal("window", {
            addEventListener: (type: string, listener: () => void) =>
                listeners.set(type, listener),
            removeEventListener: vi.fn(),
        });
        const rect = { left: 0, top: 0, width: 100, height: 20 };
        const trigger = { getBoundingClientRect: () => rect } as HTMLElement;
        const content = {
            offsetWidth: 200,
            offsetHeight: 80,
            getAttribute: () => "auto",
        } as unknown as HTMLElement;
        const update = vi.fn();
        const cleanup = observeAnchor(trigger, content, update);
        listeners.get("scroll")?.();
        listeners.get("resize")?.();
        expect(update).toHaveBeenCalledTimes(1);
        rect.top = 50;
        listeners.get("scroll")?.();
        listeners.get("scroll")?.();
        expect(update).toHaveBeenCalledTimes(2);
        cleanup();
    });

    it("hides a manual overlay when its containing popover closes", () => {
        let nextFrame: FrameRequestCallback = () => {};
        vi.stubGlobal(
            "requestAnimationFrame",
            (callback: FrameRequestCallback) => {
                nextFrame = callback;
                return 1;
            },
        );
        vi.stubGlobal("cancelAnimationFrame", vi.fn());
        vi.stubGlobal("ResizeObserver", undefined);
        vi.stubGlobal("window", {
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
        });
        let parentOpen = true;
        let childOpen = true;
        const parent = {
            hasAttribute: () => true,
            matches: () => parentOpen,
            parentElement: null,
        };
        const trigger = {
            closest: () => parent,
            getClientRects: () => [{}],
            getBoundingClientRect: () => ({
                left: 100,
                top: 200,
                width: 150,
                height: 40,
            }),
        } as unknown as HTMLElement;
        const hide = vi.fn(() => {
            childOpen = false;
        });
        const show = vi.fn(() => {
            childOpen = true;
        });
        const content = {
            getAttribute: () => "manual",
            matches: () => childOpen,
            hidePopover: hide,
            showPopover: show,
            offsetWidth: 100,
            offsetHeight: 40,
        } as unknown as HTMLElement;
        const cleanup = observeAnchor(trigger, content, vi.fn());
        parentOpen = false;
        nextFrame(16);
        expect(hide).toHaveBeenCalledTimes(1);
        nextFrame(32);
        expect(show).not.toHaveBeenCalled();
        parentOpen = true;
        nextFrame(48);
        expect(show).toHaveBeenCalledTimes(1);
        cleanup();
    });
});
