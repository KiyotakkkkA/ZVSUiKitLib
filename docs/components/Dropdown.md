# Dropdown

## Purpose

Generic dropdown popup container with positioning, outside-click handling, Escape closing, trigger state, and composable trigger/menu/item parts.

`Dropdown` does not render search or selection logic by itself. Use `Select` when you need a single-value selector with searchable options.

## Root props

| Prop          | Type                        | Default    | Description                              |
| ------------- | --------------------------- | ---------- | ---------------------------------------- |
| children      | ReactNode                   | -          | Dropdown parts and optional render block. |
| className     | string                      | -          | Outer wrapper classes.                   |
| disabled      | boolean                     | `false`    | Disables the dropdown trigger.           |
| menuWidth     | number \| string            | `220`      | Popup width.                             |
| menuPlacement | `"bottom" \| "top"`         | `"bottom"` | Popup placement relative to the trigger. |
| menuRole      | `"menu" \| "listbox"`       | `"menu"`   | ARIA role for the popup and items.       |
| onOpenChange  | `(open: boolean) => void`   | -          | Called when open state changes.          |

## Compound parts

| Component          | Extends                                  | Description                              |
| ------------------ | ---------------------------------------- | ---------------------------------------- |
| `Dropdown.Trigger` | `ButtonHTMLAttributes<HTMLButtonElement>` | Trigger button.                         |
| `Dropdown.Menu`    | `HTMLAttributes<HTMLDivElement>`         | Portaled popup menu.                     |
| `Dropdown.Item`    | `ButtonHTMLAttributes<HTMLButtonElement>` | Menu item button.                       |
| `Dropdown.Render`  | custom render prop                       | Access to `open`, `close`, `toggleOpen`. |

## Trigger props

| Prop        | Type      | Default     | Description                                  |
| ----------- | --------- | ----------- | -------------------------------------------- |
| children    | ReactNode | -           | Trigger label.                               |
| placeholder | ReactNode | `"Открыть"` | Text shown when `children` is empty.         |
| icon        | ReactNode | chevron     | Custom trailing icon.                        |
| disabled    | boolean   | -           | Disables only this trigger.                  |
| className   | string    | -           | Trigger button classes.                      |

## Item props

| Prop         | Type      | Default  | Description                                           |
| ------------ | --------- | -------- | ----------------------------------------------------- |
| children     | ReactNode | -        | Item label.                                           |
| closeOnClick | boolean   | `true`   | Close dropdown after click when not prevented.        |
| active       | boolean   | `false`  | Active visual state and `aria-selected` for listbox.  |
| icon         | ReactNode | -        | Leading item icon.                                    |
| className    | string    | -        | Item button classes.                                  |

## Render args

| Field      | Type         | Description                |
| ---------- | ------------ | -------------------------- |
| open       | boolean      | Current popup state.       |
| close      | `() => void` | Closes the dropdown.       |
| toggleOpen | `() => void` | Opens or closes dropdown.  |

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
                <Dropdown.Item closeOnClick={false}>
                    Keep open
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
```

## Render example

```tsx
import { Dropdown } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoDropdownState() {
    return (
        <Dropdown>
            <Dropdown.Trigger>Options</Dropdown.Trigger>

            <Dropdown.Render>
                {({ open, close }) => (
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={close}>
                            {open ? "Close menu" : "Open menu"}
                        </Dropdown.Item>
                    </Dropdown.Menu>
                )}
            </Dropdown.Render>
        </Dropdown>
    );
}
```
