```tsx
"use client";
import { Dropdown } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoDropdown() {
    return (
        <Dropdown menuWidth={180}>
            <Dropdown.Trigger>Actions</Dropdown.Trigger>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => console.log("Rename")}>
                    Rename
                </Dropdown.Item>
                <Dropdown.Item onClick={() => console.log("Duplicate")}>
                    Duplicate
                </Dropdown.Item>
                <Dropdown.Item closeOnClick={false}>Keep open</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
```
