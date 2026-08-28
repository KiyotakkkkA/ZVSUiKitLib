# InputDate

## Table of contents

- [Import](#import)
- [API](#api)
    - [InputDate](#inputdate)
        - [InputDateClassNames](#inputdateclassnames)
- [Example](#example)

## Import

```tsx
import { InputDate } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### InputDate

| Property          | Type                                       | Default         | Required | Description                                                                                                        |
| ----------------- | ------------------------------------------ | --------------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `ref`             | `Ref<HTMLDivElement>`                      | -               | No       | Receives the date field root element.                                                                              |
| `value`           | `CalendarDate`                             | -               | No       | The value used by the component.                                                                                   |
| `defaultValue`    | `CalendarDate`                             | `null`          | No       | The default value used by the component.                                                                           |
| `onChange`        | `(date: CalendarDate) => void`             | -               | No       | Callback invoked when change occurs.                                                                               |
| `placeholder`     | `string`                                   | -               | No       | Text used for the placeholder. Defaults to the \`inputDate.placeholder\` string from the active locale dictionary. |
| `locale`          | `string`                                   | `"ru-RU"`       | No       | The locale used by the component.                                                                                  |
| `weekStartsOn`    | `CalendarProps["weekStartsOn"]`            | `1`             | No       | The week starts on used by the component.                                                                          |
| `minDate`         | `Date`                                     | -               | No       | The min date used by the component.                                                                                |
| `maxDate`         | `Date`                                     | -               | No       | The max date used by the component.                                                                                |
| `disabledDates`   | `CalendarProps["disabledDates"]`           | -               | No       | Whether disabled dates is enabled.                                                                                 |
| `allowDeselect`   | `boolean`                                  | -               | No       | Whether allow deselect is enabled.                                                                                 |
| `showOutsideDays` | `boolean`                                  | -               | No       | Whether show outside days is enabled.                                                                              |
| `disabled`        | `boolean`                                  | `false`         | No       | Whether disabled is enabled.                                                                                       |
| `closeOnSelect`   | `boolean`                                  | `false`         | No       | Function used to close on select.                                                                                  |
| `clearable`       | `boolean`                                  | `false`         | No       | Function used to clearable.                                                                                        |
| `menuPlacement`   | [PositionAnchor](./dict.md#positionanchor) | `"bottom-left"` | No       | The popup menu position relative to its trigger.                                                                   |
| `menuWidth`       | `number \| "auto"`                         | `300`           | No       | The width of the popup menu.                                                                                       |
| `className`       | `DivClassName`                             | -               | No       | CSS classes applied to the root element.                                                                           |
| `classNames`      | `InputDateClassNames`                      | -               | No       | CSS classes applied to the component slots.                                                                        |
| `formatLabel`     | `(date: Date) => string`                   | -               | No       | Function used to format label.                                                                                     |

### InputDateClassNames

| Property      | Description                         |
| ------------- | ----------------------------------- |
| `trigger`     | Content rendered for the trigger.   |
| `menu`        | The menu used by the component.     |
| `calendar`    | The calendar used by the component. |
| `value`       | The value used by the component.    |
| `controls`    | The controls used by the component. |
| `clearButton` | Function used to clear button.      |

```tsx
"use client";
import { InputDate } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoInputDate() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <InputDate
            value={date}
            onChange={setDate}
            clearable
            closeOnSelect
            placeholder="Выберите дату"
        />
    );
}
```
