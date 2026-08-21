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
    const isTopPlacement = placement.startsWith("top");
    const isRightPlacement = placement.endsWith("right");
    const isCenterPlacement = placement.endsWith("center");

    const preferredLeft = isCenterPlacement
        ? trigger.left + (trigger.width - menu.width) / 2
        : isRightPlacement
          ? trigger.right - menu.width
          : trigger.left;

    const preferredTop = isTopPlacement
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
