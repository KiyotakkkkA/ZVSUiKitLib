"use client";
import { useState } from "react";
import { Button, SlidedPanel } from "@kiyotakkkka/zvs-uikit-lib";
export function SlidedPanelPreview() {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-full p-6">
            <Button onClick={() => setOpen(true)}>Open panel</Button>
            <SlidedPanel open={open} onClose={() => setOpen(false)}>
                <SlidedPanel.Header>
                    <SlidedPanel.Title>Filters</SlidedPanel.Title>
                    <SlidedPanel.Subtitle>
                        Adjust parameters
                    </SlidedPanel.Subtitle>
                </SlidedPanel.Header>
                <SlidedPanel.Content>Panel content</SlidedPanel.Content>
                <SlidedPanel.Footer>
                    <Button onClick={() => setOpen(false)}>Apply</Button>
                </SlidedPanel.Footer>
            </SlidedPanel>
        </div>
    );
}
