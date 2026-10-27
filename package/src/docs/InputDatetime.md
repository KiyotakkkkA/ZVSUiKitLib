# InputDatetime

## Table of contents

- [Import](#import)
- [API](#api)
    - [InputDatetime](#inputdatetime)
- [Example](#example)

## Import

```tsx
import { InputDatetime } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### InputDatetime

Accepts every [InputDate](./InputDate.md) prop except `closeOnSelect`. The popup renders a `Calendar` with `enableTime`, so picking a day keeps the selected time and picking a time keeps the selected day (today is used when no day is selected yet).

| Property      | Type                      | Default | Required | Description                                                                                                          |
| ------------- | ------------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| `placeholder` | `string`                  | -       | No       | Text used for the placeholder. Defaults to the `inputDatetime.placeholder` string from the active locale dictionary. |
| `minuteStep`  | `number`                  | `1`     | No       | The minutes interval offered by the time block.                                                                      |
| `menuWidth`   | `number \| "auto"`        | `420`   | No       | The width of the popup menu. Wider than `InputDate` to fit the time block on the right.                              |
| `classNames`  | `InputDatetimeClassNames` | -       | No       | CSS classes applied to the component slots. Same slots as `InputDateClassNames`.                                     |

The default trigger label includes the time, for example `27 октября 2026 г., 14:30` for `locale="ru-RU"`. Pass `formatLabel` to change it.

```tsx
"use client";
import { InputDatetime } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputDatetime() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <div className="grid w-full max-w-2xl gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-main-500">
                    clearable · minuteStep 5
                </span>
                <InputDatetime
                    value={date}
                    onChange={setDate}
                    clearable
                    minuteStep={5}
                />
            </div>
            <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-main-500">
                    disabled
                </span>
                <InputDatetime defaultValue={new Date()} disabled />
            </div>
        </div>
    );
}
```
