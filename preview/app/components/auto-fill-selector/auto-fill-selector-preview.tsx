"use client";
import { AutoFillSelector } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";
const options = [
    { value: "react", label: "React", description: "UI library" },
    {
        value: "typescript",
        label: "TypeScript",
        description: "Typed JavaScript",
    },
    { value: "vite", label: "Vite", description: "Build tool" },
];
export function AutoFillSelectorPreview() {
    const [value, setValue] = useState(["react"]);
    return (
        <AutoFillSelector
            options={options}
            value={value}
            onChange={setValue}
            menuWidth={320}
        >
            <AutoFillSelector.Trigger>
                <AutoFillSelector.Tags />
                <AutoFillSelector.Input placeholder="Select technologies" />
            </AutoFillSelector.Trigger>
            <AutoFillSelector.Menu>
                <AutoFillSelector.Options />
                <AutoFillSelector.Empty />
            </AutoFillSelector.Menu>
        </AutoFillSelector>
    );
}
