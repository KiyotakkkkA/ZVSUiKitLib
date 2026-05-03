# InputDate

## Purpose

Date input with popup calendar, clear action, and controlled/uncontrolled modes.

## Import

```tsx
import { InputDate } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

| Prop            | Type                             | Default           | Description                              |
| --------------- | -------------------------------- | ----------------- | ---------------------------------------- |
| value           | `Date \| null`                   | -                 | Controlled selected date.                |
| defaultValue    | `Date \| null`                   | `null`            | Initial value for uncontrolled mode.     |
| onChange        | `(date: Date \| null) => void`   | -                 | Date change callback.                    |
| placeholder     | string                           | `"Выберите дату"` | Trigger text for empty value.            |
| locale          | string                           | `"ru-RU"`         | Date label locale.                       |
| weekStartsOn    | `CalendarProps["weekStartsOn"]`  | `1`               | Week start day for nested calendar.      |
| minDate         | Date                             | -                 | Minimum available date.                  |
| maxDate         | Date                             | -                 | Maximum available date.                  |
| disabledDates   | `CalendarProps["disabledDates"]` | -                 | Disabled dates configuration.            |
| allowDeselect   | boolean                          | -                 | Pass-through to calendar.                |
| showOutsideDays | boolean                          | -                 | Pass-through to calendar.                |
| disabled        | boolean                          | `false`           | Disable trigger and popup.               |
| closeOnSelect   | boolean                          | `false`           | Close popup after selecting date.        |
| clearable       | boolean                          | `false`           | Show clear button when date is selected. |
| menuPlacement   | `"bottom" \| "top"`              | `"bottom"`        | Popup placement.                         |
| menuWidth       | number \| `"auto"`               | `"auto"`          | Popup width.                             |
| className       | string                           | -                 | Root classes.                            |
| classNames      | object                           | -                 | Classes for internal slots.              |
| formatLabel     | `(date: Date) => string`         | -                 | Custom trigger label formatting.         |

### `classNames` slots

| Slot        | Description                     |
| ----------- | ------------------------------- |
| trigger     | Trigger button classes.         |
| menu        | Popup container classes.        |
| calendar    | Nested calendar classes.        |
| value       | Trigger value label classes.    |
| controls    | Right controls wrapper classes. |
| clearButton | Clear button classes.           |

## Example

```tsx
import { InputDate } from "@kiyotakkkka/zvs-uikit-lib/ui";
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
