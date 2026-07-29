## Example

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

### Anchor example

```tsx
import { useRef } from "react";
import { Dropdown } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoDropdownAnchor() {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Dropdown menuWidth="max-content">
            <Dropdown.Anchor
                focusInputOnOpen={() => inputRef.current?.focus()}
                className="flex min-h-10 w-72 items-center rounded-xl border border-main-700 px-3"
            >
                <input
                    ref={inputRef}
                    className="w-full bg-transparent outline-none"
                    placeholder="Search"
                />
            </Dropdown.Anchor>

            <Dropdown.Menu>
                <Dropdown.Item>React</Dropdown.Item>
                <Dropdown.Item>TypeScript</Dropdown.Item>
                <Dropdown.Item>Vite</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
```

### Render example

```tsx
import { Dropdown } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoDropdownState() {
    return (
        <Dropdown>
            <Dropdown.Trigger>Options</Dropdown.Trigger>

            <Dropdown.Render>
                {({ open, close, openMenu }) => (
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={open ? close : openMenu}>
                            {open ? "Close menu" : "Open menu"}
                        </Dropdown.Item>
                    </Dropdown.Menu>
                )}
            </Dropdown.Render>
        </Dropdown>
    );
}
```
