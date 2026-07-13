"use client";
import { ScrollArea } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoScrollArea() {
    return (
        <ScrollArea orientation="both" className="max-h-40 border p-2">
            <div style={{ width: 600, height: 300 }}>Large content</div>
        </ScrollArea>
    );
}

