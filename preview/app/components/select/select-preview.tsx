"use client";
import { Select } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";
export function SelectPreview() {
    const [value, setValue] = useState("design");
    return (
        <div className="w-full p-6">
            <Select
                value={value}
                onChange={setValue}
                searchable
                options={[
                    { value: "design", label: "Design" },
                    { value: "product", label: "Product" },
                ]}
            />
        </div>
    );
}
