# AutoFillSelector

## Purpose

Composable multi-select with search, selected tags, filtered options, and a dropdown listbox.

## Option type

```ts
type AutoFillOption = {
    value: string;
    label: string;
    description?: string;
    icon?: ReactNode;
};
```

## Root props

Extends `HTMLAttributes<HTMLDivElement>` except `onChange`.

| Prop         | Type                        | Default         | Description                              |
| ------------ | --------------------------- | --------------- | ---------------------------------------- |
| options      | `AutoFillOption[]`          | -               | Option list.                             |
| value        | string[]                    | `[]`            | Selected values.                         |
| onChange     | `(value: string[]) => void` | -               | Called when selection changes.           |
| disabled     | boolean                     | `false`         | Disables interactions.                   |
| menuWidth    | number \| string            | `"max-content"` | Dropdown popup width.                    |
| children     | ReactNode                   | -               | Selector compound parts.                 |
| onOpenChange | `(open: boolean) => void`   | -               | Called when dropdown open state changes. |
| className    | string                      | -               | Root wrapper classes.                    |

The search query is cleared automatically when the dropdown closes.

## Compound parts

| Component                  | Extends                                       | Description                                                     |
| -------------------------- | --------------------------------------------- | --------------------------------------------------------------- |
| `AutoFillSelector.Trigger` | `HTMLAttributes<HTMLDivElement>`              | Clickable/focusable trigger wrapper based on `Dropdown.Anchor`. |
| `AutoFillSelector.Tags`    | `HTMLAttributes<HTMLDivElement>`              | Selected value tags.                                            |
| `AutoFillSelector.Input`   | input attributes except value/change/disabled | Search input.                                                   |
| `AutoFillSelector.Menu`    | `HTMLAttributes<HTMLDivElement>`              | Dropdown menu with scroll area.                                 |
| `AutoFillSelector.Options` | `HTMLAttributes<HTMLDivElement>`              | Filtered option list.                                           |
| `AutoFillSelector.Empty`   | `HTMLAttributes<HTMLDivElement>`              | Empty state when no options match.                              |

All compound parts must be rendered inside `AutoFillSelector`.

## Tags props

| Prop               | Type   | Default | Description                |
| ------------------ | ------ | ------- | -------------------------- |
| tagClassName       | string | -       | Selected tag classes.      |
| tagRemoveClassName | string | -       | Tag remove button classes. |
| className          | string | -       | Tags wrapper classes.      |

## Input props

`AutoFillSelector.Input` accepts native input props except `value`, `onChange`, and `disabled`.

| Prop        | Type   | Default                | Description                          |
| ----------- | ------ | ---------------------- | ------------------------------------ |
| placeholder | string | `"Введите для поиска"` | Placeholder when no values selected. |
| className   | string | -                      | Input classes.                       |

Backspace removes the last selected value when the query is empty.

## Menu props

| Prop            | Type   | Default | Description                   |
| --------------- | ------ | ------- | ----------------------------- |
| scrollClassName | string | -       | Internal scroll area classes. |
| className       | string | -       | Dropdown menu classes.        |

## Options props

| Prop                       | Type   | Default | Description                 |
| -------------------------- | ------ | ------- | --------------------------- |
| optionClassName            | string | -       | Option button classes.      |
| optionLabelClassName       | string | -       | Option label classes.       |
| optionDescriptionClassName | string | -       | Option description classes. |
| optionIconClassName        | string | -       | Option icon/check classes.  |
| className                  | string | -       | Options wrapper classes.    |

## Empty props

| Prop      | Type      | Default               | Description          |
| --------- | --------- | --------------------- | -------------------- |
| children  | ReactNode | `"Ничего не найдено"` | Empty state content. |
| className | string    | -                     | Empty state classes. |

## Example

```tsx
import { useState } from "react";
import { AutoFillSelector } from "@kiyotakkkka/zvs-uikit-lib/ui";

const options = [
    { value: "react", label: "React", description: "UI library" },
    { value: "ts", label: "TypeScript", description: "Typed JavaScript" },
    { value: "vite", label: "Vite", description: "Build tool" },
];

export function DemoAutoFillSelector() {
    const [tags, setTags] = useState<string[]>(["react"]);

    return (
        <AutoFillSelector
            value={tags}
            onChange={setTags}
            options={options}
            menuWidth={320}
        >
            <AutoFillSelector.Trigger>
                <AutoFillSelector.Tags />
                <AutoFillSelector.Input placeholder="Select technologies" />
            </AutoFillSelector.Trigger>

            <AutoFillSelector.Menu>
                <AutoFillSelector.Options />
                <AutoFillSelector.Empty />
            </AutoFillSelector.Menu>
        </AutoFillSelector>
    );
}
```
