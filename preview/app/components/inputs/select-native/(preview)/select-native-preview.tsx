"use client";
import { useState } from "react";
import { SelectNative } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoSelectNative() {
    const [value, setValue] = useState("gray");

    return (
        <SelectNative
            value={value}
            onChange={setValue}
            options={[
                { value: "gray", label: "Gray" },
                { value: "blue", label: "Blue" },
            ]}
        />
    );
}

