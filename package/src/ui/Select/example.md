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
        <Select
            value={role}
            onChange={setRole}
            options={options}
            searchable
            placeholder="Select role"
        />
    );
}
```

Need custom rendering? Pass explicit children to take full control:

```tsx
<Select value={role} onChange={setRole} options={options}>
    <Select.Trigger />
    <Select.Menu>
        <Select.Options />
    </Select.Menu>
</Select>
```
