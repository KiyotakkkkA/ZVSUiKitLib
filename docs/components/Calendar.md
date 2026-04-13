# Calendar

## Purpose

Calendar component with date selection, date limits, and custom day rendering.

## Props

| Prop             | Type                                | Default   | Description                                  |
| ---------------- | ----------------------------------- | --------- | -------------------------------------------- |
| value            | `Date \| null`                      | -         | Controlled selected date.                    |
| defaultValue     | `Date \| null`                      | `null`    | Initial selected date for uncontrolled mode. |
| onChange         | `(date: Date \| null) => void`      | -         | Date change callback.                        |
| viewDate         | Date                                | -         | Controlled displayed month.                  |
| defaultViewDate  | Date                                | -         | Initial month for uncontrolled mode.         |
| onViewDateChange | `(date: Date) => void`              | -         | Called when displayed month changes.         |
| minDate          | Date                                | -         | Minimum allowed date.                        |
| maxDate          | Date                                | -         | Maximum allowed date.                        |
| disabledDates    | `Date[] \| (date: Date) => boolean` | -         | Disabled dates list or predicate.            |
| allowDeselect    | boolean                             | -         | Allows deselecting selected date on click.   |
| showOutsideDays  | boolean                             | `true`    | Show days from adjacent months.              |
| locale           | string                              | `"ru-RU"` | Locale for labels and formatting.            |
| weekStartsOn     | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6`   | `1`       | First day of week.                           |
| className        | string                              | -         | Root classes.                                |
| dayClassName     | `(meta) => string \| undefined`     | -         | Custom classes for day cell.                 |
| renderDay        | `(meta) => ReactNode`               | -         | Custom day content renderer.                 |

## Example

```tsx
import { Calendar } from "@kiyotakkkka/zvs-uikit-lib/ui";
import { useState } from "react";

export function DemoCalendar() {
    const [date, setDate] = useState<Date | null>(new Date());

    return (
        <Calendar
            value={date}
            onChange={setDate}
            minDate={new Date(2020, 0, 1)}
            maxDate={new Date()}
            allowDeselect
        />
    );
}
```
