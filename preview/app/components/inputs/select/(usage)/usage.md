```tsx
"use client";
import { Icon, Select, type SelectOption } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

const options: SelectOption[] = [
    {
        value: "user",
        label: "User",
        icon: <Icon icon="account" />,
    },
    {
        value: "admin",
        label: "Admin",
        icon: <Icon icon="shield-account" />,
        onClick: () => console.log("Admin selected"),
    },
];

export function DemoSelect() {
    const [role, setRole] = useState("user");

    return (
        <div className="flex flex-wrap items-start gap-8">
            <Select
                value={role}
                onChange={setRole}
                options={options}
                searchable
                placeholder="Select role"
            />
            <Select
                value="user"
                onChange={() => {}}
                options={options}
                disabled
                placeholder="Select role"
            />
        </div>
    );
}
```
