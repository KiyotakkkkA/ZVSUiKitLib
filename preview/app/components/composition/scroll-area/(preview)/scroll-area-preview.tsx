"use client";
import { ScrollArea } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoScrollArea() {
    return (
        <ScrollArea orientation="both" className="max-h-40 p-2">
            {[...Array(20).keys()].map((i) => (
                <div key={i} className="p-2">
                    So long text #{i + 1} Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, quod.
                </div>
            ))}
        </ScrollArea>
    );
}
