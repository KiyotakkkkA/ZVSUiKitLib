# Switcher

## Table of contents

- [Import](#import)
- [API](#api)
    - [Switcher.Root](#switcherroot)
    - [Switcher.Option](#switcheroption)
- [Example](#example)

## Import

```tsx
import { Switcher } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### Switcher.Root

Renders a `radiogroup` and stores the selected option in `model`. Arrow keys, `Home` and `End` move the selection between enabled options.

| Property        | Type                                           | Default        | Required | Description                                                                                                       |
| --------------- | ---------------------------------------------- | -------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| `ref`           | `Ref<HTMLDivElement>`                          | -              | No       | Receives the radio group root element.                                                                            |
| `model`         | `string`                                       | -              | Yes      | The value of the currently selected option.                                                                       |
| `onModelChange` | `(value: string) => void`                      | -              | Yes      | Callback invoked with the value of the option that was picked.                                                    |
| `label`         | `string`                                       | -              | No       | Accessible name for the radio group. Defaults to the \`switcher.label\` string from the active locale dictionary. |
| `rounded`       | [RoundVariants](./dict.md#roundvariants) \| "" | `"rounded-lg"` | No       | The border-radius preset applied to the root and every option.                                                    |
| `className`     | `DivClassName`                                 | -              | No       | CSS classes applied to the root element.                                                                          |
| `children`      | `ReactNode`                                    | -              | Yes      | Renders the `Switcher.Option` elements.                                                                           |

### Switcher.Option

| Property     | Type              | Default | Required | Description                                                 |
| ------------ | ----------------- | ------- | -------- | ----------------------------------------------------------- |
| `value`      | `string`          | -       | Yes      | The value written to the root `model` when this option is picked. |
| `disabled`   | `boolean`         | `false` | No       | Disables picking this option.                               |
| `aria-label` | `string`          | -       | No       | Accessible name, for options that render only an icon.      |
| `className`  | `ButtonClassName` | -       | No       | CSS classes applied to the option button.                   |
| `children`   | `ReactNode`       | -       | Yes      | Content rendered inside the option: text, icons, badges.    |

```tsx
"use client";
import { Switcher } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoSwitcher() {
    const [period, setPeriod] = useState("week");

    return (
        <Switcher.Root model={period} onModelChange={setPeriod}>
            <Switcher.Option value="day">Day</Switcher.Option>
            <Switcher.Option value="week">Week</Switcher.Option>
            <Switcher.Option value="month">Month</Switcher.Option>
        </Switcher.Root>
    );
}
```
