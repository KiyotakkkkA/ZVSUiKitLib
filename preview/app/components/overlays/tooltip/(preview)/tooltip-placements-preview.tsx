"use client";
import {
    Button,
    Tooltip,
    type PositionAnchor,
} from "@kiyotakkkka/zvs-uikit-lib";

const placements: (PositionAnchor | null)[] = [
    "top-left",
    "top-center",
    "top-right",
    "left-center",
    null,
    "right-center",
    "bottom-left",
    "bottom-center",
    "bottom-right",
];

export function DemoTooltipPlacements() {
    return (
        <div className="grid grid-cols-3 gap-3">
            {placements.map((placement, index) =>
                placement ? (
                    <Tooltip
                        key={placement}
                        label={placement}
                        placement={placement}
                    >
                        <Button variant="secondary" className="w-full">
                            {placement}
                        </Button>
                    </Tooltip>
                ) : (
                    <span key={index} />
                ),
            )}
        </div>
    );
}
