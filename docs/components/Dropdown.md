# Dropdown

## Purpose

Flexible dropdown menu with search, custom trigger, and controllable width/placement.

## Props

| Prop              | Type                                                                         | Default           | Description                       |
| ----------------- | ---------------------------------------------------------------------------- | ----------------- | --------------------------------- |
| value             | string                                                                       | -                 | Current selected value.           |
| options           | `{ value: string; label: string; icon?: ReactNode; onClick?: () => void }[]` | -                 | Menu options.                     |
| onChange          | `(nextValue: string) => void`                                                | -                 | Called on select.                 |
| placeholder       | string                                                                       | -                 | Trigger text when empty.          |
| searchable        | boolean                                                                      | `false`           | Shows search input.               |
| searchPlaceholder | string                                                                       | `"Search..."`     | Search input placeholder.         |
| emptyMessage      | string                                                                       | `"Nothing found"` | Text for empty options list.      |
| className         | string                                                                       | `""`              | Outer wrapper classes.            |
| triggerClassName  | string                                                                       | `""`              | Trigger button classes.           |
| menuClassName     | string                                                                       | `""`              | Popup menu classes.               |
| menuWidth         | number \| string                                                             | auto              | Popup width (fixed or css value). |
| optionClassName   | string                                                                       | `""`              | Option item classes.              |
| disabled          | boolean                                                                      | `false`           | Disables component.               |
| ariaLabel         | string                                                                       | -                 | `aria-label` value.               |
| menuPlacement     | `"bottom" \| "top"`                                                          | `"bottom"`        | Popup placement.                  |
| closeOnSelect     | boolean                                                                      | `true`            | Close popup after selection.      |
| renderTrigger     | custom render fn                                                             | -                 | Full custom trigger rendering.    |

## Example

```tsx
import { Dropdown } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";

export function DemoDropdown() {
    const [value, setValue] = useState<string | undefined>(undefined);

    return (
        <Dropdown
            value={value}
            onChange={setValue}
            searchable
            options={[
                { value: "new", label: "New" },
                { value: "in_progress", label: "In Progress" },
                { value: "done", label: "Done" },
            ]}
            placeholder="Status"
        />
    );
}
```
