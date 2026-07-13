"use client";
import { Switcher } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoSwitcher() {
    const [tab, setTab] = useState("all");

    return (
        <Switcher
            value={tab}
            onChange={setTab}
            options={[
                { value: "all", label: "All" },
                { value: "active", label: "Active" },
                { value: "done", label: "Done" },
            ]}
        />
    );
}

