import styles from "./Tooltip.module.css";
import type { PositionAnchor } from "../..";
import { cn } from "../../lib/utils";
import type { TooltipProps } from "./types";

const panelPositionByPlacement: Record<PositionAnchor, string> = {
    "top-left": styles.panelTopLeft,
    "top-center": styles.panelTopCenter,
    "top-right": styles.panelTopRight,
    "bottom-left": styles.panelBottomLeft,
    "bottom-center": styles.panelBottomCenter,
    "bottom-right": styles.panelBottomRight,
};

const arrowPositionByPlacement: Record<PositionAnchor, string> = {
    "top-left": styles.arrowTopLeft,
    "top-center": styles.arrowTopCenter,
    "top-right": styles.arrowTopRight,
    "bottom-left": styles.arrowBottomLeft,
    "bottom-center": styles.arrowBottomCenter,
    "bottom-right": styles.arrowBottomRight,
};

export function Tooltip({
    children,
    label,
    placement = "top-center",
    className,
    rounded = "rounded-lg",
}: TooltipProps) {
    return (
        <span className={styles.s0}>
            {children}
            <span
                role="tooltip"
                className={cn(
                    styles.s1,
                    `zvs-${rounded}`,
                    styles.s2,
                    styles.s3,
                    styles.s4,
                    panelPositionByPlacement[placement],
                    className,
                )}
            >
                {label}
                <span
                    className={cn(
                        styles.s5,
                        arrowPositionByPlacement[placement],
                    )}
                    aria-hidden
                />
            </span>
        </span>
    );
}
