"use client";
import { Tabs } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";
export function TabsPreview() {
    const [value, setValue] = useState("account");
    return (
        <div className="w-full p-6">
            <Tabs
                value={value}
                onChange={setValue}
                options={[
                    { value: "account", label: "Account" },
                    { value: "docs", label: "Documents" },
                ]}
            />
        </div>
    );
}
