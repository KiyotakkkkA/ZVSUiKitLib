# AutoFillSelector

## Table of contents

- [Import](#import)
- [API](#api)
    - [AutoFillOption](#autofilloption)
    - [AutoFillSelector](#autofillselector)
    - [AutoFillSelector.Trigger](#autofillselectortrigger)
    - [AutoFillSelector.Tags](#autofillselectortags)
    - [AutoFillSelector.Input](#autofillselectorinput)
    - [AutoFillSelector.Menu](#autofillselectormenu)
    - [AutoFillSelector.Options](#autofillselectoroptions)
    - [AutoFillSelector.Empty](#autofillselectorempty)
    - [AutoFillSelectorContextValue](#autofillselectorcontextvalue)
- [Example](#example)

## Import

```tsx
import { AutoFillSelector } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### AutoFillOption

| Property      | Type        | Default | Required | Description                      |
| ------------- | ----------- | ------- | -------- | -------------------------------- |
| `value`       | `string`    | -       | Yes      | The value used by the component. |
| `label`       | `string`    | -       | Yes      | Text used for the label.         |
| `description` | `string`    | -       | No       | Text used for the description.   |
| `icon`        | `ReactNode` | -       | No       | Content rendered for the icon.   |

### AutoFillSelector

Extends: `Omit< React.HTMLAttributes<HTMLDivElement>, "onChange" >`.

| Property       | Type                        | Default       | Required | Description                                |
| -------------- | --------------------------- | ------------- | -------- | ------------------------------------------ |
| `options`      | `AutoFillOption[]`          | -             | Yes      | The options used by the component.         |
| `value`        | `string[]`                  | `EMPTY_VALUE` | No       | The value used by the component.           |
| `onChange`     | `(value: string[]) => void` | -             | No       | Callback invoked when change occurs.       |
| `disabled`     | `boolean`                   | `false`       | No       | Whether disabled is enabled.               |
| `menuWidth`    | `number \| string`          | `"auto"`      | No       | The width of the popup menu.               |
| `children`     | `ReactNode`                 | -             | Yes      | The content rendered inside the component. |
| `onOpenChange` | `(open: boolean) => void`   | -             | No       | Callback invoked when open change occurs.  |

### AutoFillSelector.Trigger

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property  | Type                                     | Default         | Required | Description                                        |
| --------- | ---------------------------------------- | --------------- | -------- | -------------------------------------------------- |
| `rounded` | [RoundVariants](./dict.md#roundvariants) | `"rounded-2xl"` | No       | The border-radius preset applied to the component. |

### AutoFillSelector.Tags

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property             | Type                                     | Default          | Required | Description                                        |
| -------------------- | ---------------------------------------- | ---------------- | -------- | -------------------------------------------------- |
| `rounded`            | [RoundVariants](./dict.md#roundvariants) | `"rounded-full"` | No       | The border-radius preset applied to the component. |
| `tagClassName`       | `SpanClassName`                          | -                | No       | CSS classes applied to the tag element.            |
| `tagRemoveClassName` | `ButtonClassName`                        | -                | No       | CSS classes applied to the tag remove element.     |

### AutoFillSelector.Input

Extends: `Omit< InputHTMLAttributes<HTMLInputElement>, "value" \| "onChange" \| "disabled" >`.

| Property  | Type                                     | Default          | Required | Description                                        |
| --------- | ---------------------------------------- | ---------------- | -------- | -------------------------------------------------- |
| `rounded` | [RoundVariants](./dict.md#roundvariants) | `"rounded-full"` | No       | The border-radius preset applied to the component. |

### AutoFillSelector.Menu

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property  | Type                                     | Default         | Required | Description                                        |
| --------- | ---------------------------------------- | --------------- | -------- | -------------------------------------------------- |
| `rounded` | [RoundVariants](./dict.md#roundvariants) | `"rounded-2xl"` | No       | The border-radius preset applied to the component. |

### AutoFillSelector.Options

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property                     | Type                                     | Default         | Required | Description                                            |
| ---------------------------- | ---------------------------------------- | --------------- | -------- | ------------------------------------------------------ |
| `optionClassName`            | `ButtonClassName`                        | -               | No       | CSS classes applied to the option element.             |
| `optionLabelClassName`       | `SpanClassName`                          | -               | No       | CSS classes applied to the option label element.       |
| `optionDescriptionClassName` | `SpanClassName`                          | -               | No       | CSS classes applied to the option description element. |
| `optionIconClassName`        | `SvgClassName`                           | -               | No       | CSS classes applied to the option icon element.        |
| `rounded`                    | [RoundVariants](./dict.md#roundvariants) | `"rounded-2xl"` | No       | The border-radius preset applied to the component.     |

### AutoFillSelector.Empty

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property   | Type        | Default           | Required | Description                                |
| ---------- | ----------- | ----------------- | -------- | ------------------------------------------ |
| `children` | `ReactNode` | `"Nothing found"` | No       | The content rendered inside the component. |

### AutoFillSelectorContextValue

| Property          | Type                                        | Default | Required | Description                        |
| ----------------- | ------------------------------------------- | ------- | -------- | ---------------------------------- |
| `options`         | `AutoFillOption[]`                          | -       | Yes      | The options used by the component. |
| `value`           | `string[]`                                  | -       | Yes      | The value used by the component.   |
| `selectedSet`     | `Set<string>`                               | -       | Yes      | Whether selected set is enabled.   |
| `query`           | `string`                                    | -       | Yes      | The query used by the component.   |
| `setQuery`        | `(query: string) => void`                   | -       | Yes      | Function used to set query.        |
| `filteredOptions` | `AutoFillOption[]`                          | -       | Yes      | Function used to filtered options. |
| `disabled`        | `boolean`                                   | -       | Yes      | Whether disabled is enabled.       |
| `inputRef`        | `React.RefObject<HTMLInputElement \| null>` | -       | Yes      | Reference to the input ref.        |
| `toggleValue`     | `(value: string) => void`                   | -       | Yes      | Function used to toggle value.     |
| `removeValue`     | `(value: string) => void`                   | -       | Yes      | Function used to remove value.     |

## Example

```tsx
"use client";
import { useState } from "react";
import { AutoFillSelector } from "@kiyotakkkka/zvs-uikit-lib";

const options = [
    { value: "react", label: "React", description: "UI library" },
    { value: "ts", label: "TypeScript", description: "Typed JavaScript" },
    { value: "vite", label: "Vite", description: "Build tool" },
];

export function DemoAutoFillSelector() {
    const [tags, setTags] = useState<string[]>(["react"]);

    return (
        <AutoFillSelector value={tags} onChange={setTags} options={options}>
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
