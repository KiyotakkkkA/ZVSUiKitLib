```tsx
"use client";
import { Icon } from "@iconify/react";
import { Dropdown } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoDropdown() {
    return (
        <div className="flex flex-wrap items-center gap-6">
            <Dropdown menuWidth={200}>
                <Dropdown.Trigger>Actions</Dropdown.Trigger>
                <Dropdown.Menu>
                    <Dropdown.Item
                        icon={<Icon icon="material-symbols:edit-outline" />}
                        active
                        onClick={() => console.log("Rename")}
                    >
                        Rename
                    </Dropdown.Item>
                    <Dropdown.Item
                        icon={
                            <Icon icon="material-symbols:content-copy-outline" />
                        }
                        onClick={() => console.log("Duplicate")}
                    >
                        Duplicate
                    </Dropdown.Item>
                    <Dropdown.Item closeOnClick={false}>
                        Keep open
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Trigger disabled>Disabled</Dropdown.Trigger>
                <Dropdown.Menu>
                    <Dropdown.Item>Unreachable</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
```
