# Dropdown

## Table of contents

- [Import](#import)
- [API](#api)
    - [DropdownContextValue](#dropdowncontextvalue)
    - [Dropdown](#dropdown)
    - [Dropdown.Trigger](#dropdowntrigger)
    - [Dropdown.Anchor](#dropdownanchor)
    - [Dropdown.Menu](#dropdownmenu)
    - [Dropdown.Item](#dropdownitem)
    - [Dropdown.Render](#dropdownrender)
- [Example](#example)

## Import

```tsx
import { Dropdown } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### DropdownContextValue

| Property                    | Type                                       | Default | Required | Description                                                                          |
| --------------------------- | ------------------------------------------ | ------- | -------- | ------------------------------------------------------------------------------------ |
| `open`                      | `boolean`                                  | -       | Yes      | Indicates whether the popup menu is open.                                            |
| `disabled`                  | `boolean`                                  | -       | Yes      | Indicates whether the dropdown trigger is disabled.                                  |
| `menuId`                    | `string`                                   | -       | Yes      | Identifies the popup menu for ARIA relationships.                                    |
| `toggleOpen`                | `() => void`                               | -       | Yes      | Opens the menu when closed and closes it when open.                                  |
| `openMenu`                  | `() => void`                               | -       | Yes      | Opens the popup menu.                                                                |
| `close`                     | `() => void`                               | -       | Yes      | Closes the popup menu.                                                               |
| `setTriggerRef`             | `Ref<HTMLElement>`                         | -       | Yes      | Receives the dropdown trigger element.                                               |
| `setMenuRef`                | `Ref<HTMLDivElement>`                      | -       | Yes      | Receives the popup menu element.                                                     |
| `ignoreNextTriggerClickRef` | `MutableRefObject<boolean>`                | -       | Yes      | Tracks whether the next trigger click must be ignored after an external open action. |
| `menuPlacement`             | [PositionAnchor](./dict.md#positionanchor) | -       | Yes      | Specifies the preferred popup position relative to the trigger.                      |

### Dropdown

| Property        | Type                                       | Default         | Required | Description                                                         |
| --------------- | ------------------------------------------ | --------------- | -------- | ------------------------------------------------------------------- |
| `children`      | `ReactNode`                                | -               | Yes      | Renders the dropdown trigger, menu, and optional render-prop parts. |
| `className`     | `DivClassName`                             | -               | No       | Applies CSS classes to the dropdown root wrapper.                   |
| `disabled`      | `boolean`                                  | `false`         | No       | Prevents the dropdown from opening through its trigger.             |
| `menuWidth`     | `number \| string`                         | `220`           | No       | Sets the popup width; \`"auto"\` matches the trigger width.         |
| `menuPlacement` | [PositionAnchor](./dict.md#positionanchor) | `"bottom-left"` | No       | Specifies the preferred popup position relative to the trigger.     |
| `onOpenChange`  | `(open: boolean) => void`                  | -               | No       | Runs whenever the popup open state changes.                         |

### Dropdown.Trigger

Extends: `ButtonHTMLAttributes<HTMLButtonElement>`.

| Property      | Type                                           | Default         | Required | Description                                                     |
| ------------- | ---------------------------------------------- | --------------- | -------- | --------------------------------------------------------------- |
| `placeholder` | `ReactNode`                                    | `"Открыть"`     | No       | Renders fallback trigger content when no children are supplied. |
| `icon`        | `ReactNode`                                    | -               | No       | Replaces the default trailing chevron.                          |
| `rounded`     | [RoundVariants](./dict.md#roundvariants) \| "" | `"rounded-2xl"` | No       | Selects the trigger button border radius.                       |

### Dropdown.Anchor

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property           | Type         | Default | Required | Description                                                              |
| ------------------ | ------------ | ------- | -------- | ------------------------------------------------------------------------ |
| `focusInputOnOpen` | `() => void` | -       | No       | Runs after the anchor opens the menu, typically to focus a nested input. |

### Dropdown.Menu

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property  | Type                                           | Default        | Required | Description                           |
| --------- | ---------------------------------------------- | -------------- | -------- | ------------------------------------- |
| `rounded` | [RoundVariants](./dict.md#roundvariants) \| "" | `"rounded-lg"` | No       | Selects the popup menu border radius. |

### Dropdown.Item

Extends: `ButtonHTMLAttributes<HTMLButtonElement>`.

| Property       | Type        | Default | Required | Description                                                          |
| -------------- | ----------- | ------- | -------- | -------------------------------------------------------------------- |
| `closeOnClick` | `boolean`   | `true`  | No       | Closes the popup after the item click unless the event is prevented. |
| `active`       | `boolean`   | `false` | No       | Applies the active item appearance.                                  |
| `icon`         | `ReactNode` | -       | No       | Renders a leading icon inside the menu item.                         |

### Dropdown.Render

| Property   | Type                                                                                                                                                                                                                                                                              | Default | Required | Description                                                |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------- | ---------------------------------------------------------- |
| `children` | `(args: { /** Indicates whether the popup menu is open. */ open: boolean; /** Closes the popup menu. */ close: () => void; /** Opens the menu when closed and closes it when open. */ toggleOpen: () => void; /** Opens the popup menu. */ openMenu: () => void; }) => ReactNode` | -       | Yes      | Receives the current dropdown state and control functions. |

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
