# InputTime

## Table of contents

- [Import](#import)
- [API](#api)
    - [InputTime](#inputtime)
    - [InputTimeClassNames](#inputtimeclassnames)
- [Example](#example)

## Import

```tsx
import { InputTime } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### InputTime

| Property        | Type                                         | Default         | Required | Description                                                                                                        |
| --------------- | -------------------------------------------- | --------------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `ref`           | `Ref<HTMLDivElement>`                        | -               | No       | Receives the time field root element.                                                                              |
| `value`         | `TimeValue`                                  | -               | No       | The selected time in the `"HH:mm"` format.                                                                         |
| `defaultValue`  | `TimeValue`                                  | `null`          | No       | The initial time of the uncontrolled field.                                                                        |
| `onChange`      | `(time: TimeValue) => void`                  | -               | No       | Callback invoked with the new `"HH:mm"` time, or `null` after clearing.                                            |
| `placeholder`   | `string`                                     | -               | No       | Text used for the placeholder. Defaults to the `inputTime.placeholder` string from the active locale dictionary.   |
| `minuteStep`    | `number`                                     | `1`             | No       | The minutes interval offered in the minutes column.                                                                |
| `disabled`      | `boolean`                                    | `false`         | No       | Whether disabled is enabled.                                                                                       |
| `closeOnSelect` | `boolean`                                    | `false`         | No       | Closes the menu after a minute is picked.                                                                          |
| `clearable`     | `boolean`                                    | `false`         | No       | Shows a button that clears the selected time.                                                                      |
| `menuPlacement` | [PositionAnchor](./dict.md#positionanchor)   | `"bottom-left"` | No       | The popup menu position relative to its trigger.                                                                   |
| `menuWidth`     | `number \| "auto"`                           | `200`           | No       | The width of the popup menu.                                                                                       |
| `className`     | `DivClassName`                               | -               | No       | CSS classes applied to the root element.                                                                           |
| `classNames`    | `InputTimeClassNames`                        | -               | No       | CSS classes applied to the component slots.                                                                        |

`TimeValue` is `string | null`: a 24-hour `"HH:mm"` time, or `null` when nothing is selected.

### InputTimeClassNames

| Property      | Description                     |
| ------------- | ------------------------------- |
| `trigger`     | Content rendered for the trigger. |
| `menu`        | The menu used by the component. |
| `columns`     | The hours and minutes columns.  |
| `value`       | The value used by the component. |
| `controls`    | The controls used by the component. |
| `clearButton` | Function used to clear button.  |

```tsx
"use client";
import { InputTime } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputTime() {
    const [time, setTime] = useState<string | null>("09:30");

    return (
        <div className="grid w-full max-w-2xl gap-6 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-main-500">
                    clearable · {time ?? "null"}
                </span>
                <InputTime value={time} onChange={setTime} clearable />
            </div>
            <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-main-500">
                    minuteStep 15 · closeOnSelect
                </span>
                <InputTime minuteStep={15} closeOnSelect />
            </div>
            <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-main-500">
                    disabled
                </span>
                <InputTime defaultValue="18:00" disabled />
            </div>
        </div>
    );
}
```
