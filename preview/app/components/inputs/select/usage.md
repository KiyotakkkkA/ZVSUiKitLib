```tsx
"use client";
import { Icon } from "@iconify/react";
import { Select } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoSelect() {
    const [role, setRole] = useState("user");

    return (
        <Select
            value={role}
            onChange={setRole}
            searchable
            options={[
                {
                    value: "user",
                    label: "User",
                    icon: <Icon icon="mdi:account" />,
                },
                {
                    value: "admin",
                    label: "Admin",
                    icon: <Icon icon="mdi:shield-account" />,
                    onClick: () => console.log("Admin selected"),
                },
            ]}
            placeholder="Select role"
        />
    );
}
```
