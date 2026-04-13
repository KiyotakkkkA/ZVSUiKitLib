# InputDate

## Purpose

Date input with popup calendar, clear action, and controlled/uncontrolled modes.

## Props

| Prop              | Type                             | Default         | Description                              |
| ----------------- | -------------------------------- | --------------- | ---------------------------------------- |
| value             | `Date \| null`                   | -               | Controlled selected date.                |
| defaultValue      | `Date \| null`                   | `null`          | Initial value for uncontrolled mode.     |
| onChange          | `(date: Date \| null) => void`   | -               | Date change callback.                    |
| placeholder       | string                           | `"Select date"` | Trigger text for empty value.            |
| locale            | string                           | `"ru-RU"`       | Date label locale.                       |
| weekStartsOn      | `CalendarProps["weekStartsOn"]`  | `1`             | Week start day for nested calendar.      |
| minDate           | Date                             | -               | Minimum available date.                  |
| maxDate           | Date                             | -               | Maximum available date.                  |
| disabledDates     | `CalendarProps["disabledDates"]` | -               | Disabled dates configuration.            |
| allowDeselect     | boolean                          | -               | Pass-through to calendar.                |
| showOutsideDays   | boolean                          | -               | Pass-through to calendar.                |
| disabled          | boolean                          | `false`         | Disable trigger and popup.               |
| closeOnSelect     | boolean                          | `false`         | Close popup after selecting date.        |
| clearable         | boolean                          | `false`         | Show clear button when date is selected. |
| menuPlacement     | `"bottom" \| "top"`              | `"bottom"`      | Popup placement.                         |
| menuWidth         | number                           | `348`           | Popup width in pixels.                   |
| className         | string                           | -               | Root classes.                            |
| triggerClassName  | string                           | -               | Trigger button classes.                  |
| menuClassName     | string                           | -               | Popup container classes.                 |
| calendarClassName | string                           | -               | Nested calendar classes.                 |
| formatLabel       | `(date: Date) => string`         | -               | Custom trigger label formatting.         |

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
            placeholder="Deadline"
        />
    );
}
```
