"use client";
import { Button, Tooltip } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoTooltip() {
    return (
        <div className="flex flex-wrap items-center gap-6">
            <Tooltip label="Placed above" placement="top-center">
                <Button variant="secondary">Top</Button>
            </Tooltip>
            <Tooltip label="Placed to the right" placement="right-center">
                <Button variant="secondary">Right</Button>
            </Tooltip>
            <Tooltip label="Placed below" placement="bottom-center">
                <Button variant="secondary">Bottom</Button>
            </Tooltip>
            <Tooltip label="Placed to the left" placement="left-center">
                <Button variant="secondary">Left</Button>
            </Tooltip>
        </div>
    );
}
