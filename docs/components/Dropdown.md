# Dropdown

## Purpose

Generic dropdown popup container with positioning, outside-click handling, Escape closing, trigger state, and composable trigger/anchor/menu/item parts.

`Dropdown` does not render search or selection logic by itself. Use `Select` when you need a single-value selector with searchable options.

## Import

```tsx
import { Dropdown } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

| Prop          | Type                      | Default    | Description                               |
| ------------- | ------------------------- | ---------- | ----------------------------------------- |
| children      | ReactNode                 | -          | Dropdown parts and optional render block. |
| className     | string                    | -          | Outer wrapper classes.                    |
| disabled      | boolean                   | `false`    | Disables the dropdown trigger.            |
| menuWidth     | number \| string          | `220`      | Popup width.                              |
| menuPlacement | `"bottom" \| "top"`       | `"bottom"` | Popup placement relative to the trigger.  |
| menuRole      | `"menu" \| "listbox"`     | `"menu"`   | ARIA role for the popup and items.        |
| onOpenChange  | `(open: boolean) => void` | -          | Called when open state changes.           |

## Compound parts

| Component          | Extends                                   | Description                            |
| ------------------ | ----------------------------------------- | -------------------------------------- |
| `Dropdown.Trigger` | `ButtonHTMLAttributes<HTMLButtonElement>` | Trigger button.                        |
| `Dropdown.Anchor`  | `HTMLAttributes<HTMLDivElement>`          | Custom div anchor that opens the menu. |
| `Dropdown.Menu`    | `HTMLAttributes<HTMLDivElement>`          | Portaled popup menu.                   |
| `Dropdown.Item`    | `ButtonHTMLAttributes<HTMLButtonElement>` | Menu item button.                      |
| `Dropdown.Render`  | custom render prop                        | Access to dropdown state and helpers.  |

### `Dropdown.Trigger` props

| Prop        | Type      | Default     | Description                          |
| ----------- | --------- | ----------- | ------------------------------------ |
| children    | ReactNode | -           | Trigger label.                       |
| placeholder | ReactNode | `"Открыть"` | Text shown when `children` is empty. |
| icon        | ReactNode | chevron     | Custom trailing icon.                |
| disabled    | boolean   | -           | Disables only this trigger.          |
| className   | string    | -           | Trigger button classes.              |

### `Dropdown.Anchor` props

`Dropdown.Anchor` renders a `div` with button-like ARIA attributes. Use it when the clickable area is not a button, for example a custom input wrapper.

| Prop             | Type         | Default | Description                                     |
| ---------------- | ------------ | ------- | ----------------------------------------------- |
| children         | ReactNode    | -       | Anchor content.                                 |
| focusInputOnOpen | `() => void` | -       | Called after opening by click, Enter, or Space. |
| className        | string       | -       | Anchor classes.                                 |

### `Dropdown.Item` props

| Prop         | Type      | Default | Description                                          |
| ------------ | --------- | ------- | ---------------------------------------------------- |
| children     | ReactNode | -       | Item label.                                          |
| closeOnClick | boolean   | `true`  | Close dropdown after click when not prevented.       |
| active       | boolean   | `false` | Active visual state and `aria-selected` for listbox. |
| icon         | ReactNode | -       | Leading item icon.                                   |
| className    | string    | -       | Item button classes.                                 |

### `Dropdown.Render` args

| Field      | Type         | Description               |
| ---------- | ------------ | ------------------------- |
| open       | boolean      | Current popup state.      |
| close      | `() => void` | Closes the dropdown.      |
| toggleOpen | `() => void` | Opens or closes dropdown. |
| openMenu   | `() => void` | Opens the dropdown.       |

## Example

```tsx
import { Dropdown } from "@kiyotakkkka/zvs-uikit-lib/ui";

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
import { Dropdown } from "@kiyotakkkka/zvs-uikit-lib/ui";

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
import { Dropdown } from "@kiyotakkkka/zvs-uikit-lib/ui";

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
