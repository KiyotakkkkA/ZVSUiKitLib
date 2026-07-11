"use client";
import { Switcher } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";
export function SwitcherPreview() {
    const [value, setValue] = useState("all");
    return (
        <div className="w-full p-6">
            <Switcher
                value={value}
                onChange={setValue}
                options={[
                    { value: "all", label: "All" },
                    { value: "done", label: "Done" },
                ]}
            />
        </div>
    );
}
