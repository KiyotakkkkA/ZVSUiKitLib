"use client";
import { Button, Tooltip } from "@kiyotakkkka/zvs-uikit-lib";
export function DemoTooltip() {
    return (
        <Tooltip label="The quick brown fox" placement="right-center">
            <Button>Hover here</Button>
        </Tooltip>
    );
}
