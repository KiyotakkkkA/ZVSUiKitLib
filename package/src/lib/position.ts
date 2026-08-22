import type { PositionAnchor } from "../ui/_shared/types";

/**
 * Geometry behind the Dropdown popup. Kept free of the DOM so the placement
 * and viewport clamping can be tested on their own.
 */

export type Rect = {
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
};

export type Size = {
    width: number;
    height: number;
};

export type Viewport = {
    width: number;
    height: number;
};

export const clamp = (value: number, min: number, max: number) => {
    if (max < min) return min;

    return Math.max(min, Math.min(value, max));
};

/**
 * Returns the page coordinates for a popup of `menu` size anchored to
 * `trigger`, kept `padding` away from the edges of `viewport`. When the popup
 * is larger than the space available the `min` edge wins, so it is never
 * pushed off the top or the left.
 */
export const computeMenuPosition = ({
    trigger,
    menu,
    placement,
    viewport,
    gap,
    padding,
}: {
    trigger: Rect;
    menu: Size;
    placement: PositionAnchor;
    viewport: Viewport;
    gap: number;
    padding: number;
}) => {
    const isLeftSide = placement === "left-center";
    const isRightSide = placement === "right-center";
    const isTopSide = placement.startsWith("top");
    const isRightAligned = placement.endsWith("right");
    const isCenterAligned = placement.endsWith("center");

    const preferredLeft = isLeftSide
        ? trigger.left - menu.width - gap
        : isRightSide
          ? trigger.right + gap
          : isCenterAligned
            ? trigger.left + (trigger.width - menu.width) / 2
            : isRightAligned
              ? trigger.right - menu.width
              : trigger.left;

    const preferredTop =
        isLeftSide || isRightSide
            ? trigger.top + (trigger.bottom - trigger.top - menu.height) / 2
            : isTopSide
              ? trigger.top - menu.height - gap
              : trigger.bottom + gap;

    return {
        left: clamp(
            preferredLeft,
            padding,
            viewport.width - menu.width - padding,
        ),
        top: clamp(
            preferredTop,
            padding,
            viewport.height - menu.height - padding,
        ),
    };
};
