# AutoFillSelector

## Purpose

Multi-select with search, selected tags, and dropdown option list.

## Props

Extends `HTMLAttributes<HTMLDivElement>` (except `onChange`).

| Prop        | Type                                                       | Default                | Description                    |
| ----------- | ---------------------------------------------------------- | ---------------------- | ------------------------------ |
| options     | `{ value: string; label: string; description?: string }[]` | -                      | Option list.                   |
| value       | string[]                                                   | `[]`                   | Selected values.               |
| onChange    | `(value: string[]) => void`                                | -                      | Called when selection changes. |
| placeholder | string                                                     | `"Введите для поиска"` | Search input placeholder.      |
| disabled    | boolean                                                    | -                      | Disables interactions.         |
| className   | string                                                     | -                      | Wrapper classes.               |
| classNames  | object                                                     | -                      | Classes for internal slots.    |

### classNames slots

| Slot              | Description                    |
| ----------------- | ------------------------------ |
| trigger           | Input trigger wrapper classes. |
| tag               | Selected tag classes.          |
| tagRemove         | Tag remove button classes.     |
| input             | Search input classes.          |
| menu              | Dropdown menu classes.         |
| empty             | Empty state text classes.      |
| option            | Option button classes.         |
| optionLabel       | Option label classes.          |
| optionDescription | Option description classes.    |
| optionIcon        | Option icon classes.           |

## Example

```tsx
import { AutoFillSelector } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";

export function DemoAutoFillSelector() {
    const [tags, setTags] = useState<string[]>(["react"]);

    return (
        <AutoFillSelector
            value={tags}
            onChange={setTags}
            options={[
                { value: "react", label: "React" },
                { value: "ts", label: "TypeScript" },
                { value: "vite", label: "Vite" },
            ]}
            placeholder="Select technologies"
        />
    );
}
```
