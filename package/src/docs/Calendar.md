# Calendar

## Table of contents

- [Import](#import)
- [API](#api)
    - [CalendarDate](#calendardate)
    - [DayMeta](#daymeta)
    - [Calendar](#calendar)
        - [CalendarClassNames](#calendarclassnames)
- [Example](#example)

## Import

```tsx
import { Calendar } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### CalendarDate

```ts
type CalendarDate = Date | null;
```

### DayMeta

| Property         | Type      | Default | Required | Description                          |
| ---------------- | --------- | ------- | -------- | ------------------------------------ |
| `date`           | `Date`    | -       | Yes      | The date used by the component.      |
| `isToday`        | `boolean` | -       | Yes      | Whether is today is enabled.         |
| `isSelected`     | `boolean` | -       | Yes      | Whether is selected is enabled.      |
| `isCurrentMonth` | `boolean` | -       | Yes      | Whether is current month is enabled. |
| `isDisabled`     | `boolean` | -       | Yes      | Whether is disabled is enabled.      |

### Calendar

| Property           | Type                                  | Default   | Required | Description                                    |
| ------------------ | ------------------------------------- | --------- | -------- | ---------------------------------------------- |
| `ref`              | `Ref<HTMLDivElement>`                 | -         | No       | Receives the calendar root element.            |
| `value`            | `CalendarDate`                        | -         | No       | The value used by the component.               |
| `defaultValue`     | `CalendarDate`                        | `null`    | No       | The default value used by the component.       |
| `onChange`         | `(date: CalendarDate) => void`        | -         | No       | Callback invoked when change occurs.           |
| `viewDate`         | `Date`                                | -         | No       | The view date used by the component.           |
| `defaultViewDate`  | `Date`                                | -         | No       | The default view date used by the component.   |
| `onViewDateChange` | `(date: Date) => void`                | -         | No       | Callback invoked when view date change occurs. |
| `minDate`          | `Date`                                | -         | No       | The min date used by the component.            |
| `maxDate`          | `Date`                                | -         | No       | The max date used by the component.            |
| `disabledDates`    | `Date[] \| ((date: Date) => boolean)` | -         | No       | Whether disabled dates is enabled.             |
| `allowDeselect`    | `boolean`                             | -         | No       | Whether allow deselect is enabled.             |
| `showOutsideDays`  | `boolean`                             | `true`    | No       | Whether show outside days is enabled.          |
| `locale`           | `string`                              | `"ru-RU"` | No       | The locale used by the component.              |
| `weekStartsOn`     | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6`     | `1`       | No       | The week starts on used by the component.      |
| `className`        | `DivClassName`                        | -         | No       | CSS classes applied to the root element.       |
| `classNames`       | `CalendarClassNames`                  | -         | No       | CSS classes applied to the component slots.    |
| `renderDay`        | `(meta: DayMeta) => ReactNode`        | -         | No       | Function used to render day.                   |

### CalendarClassNames

| Property      | Description                             |
| ------------- | --------------------------------------- |
| `header`      | Content rendered for the header.        |
| `navButton`   | The nav button used by the component.   |
| `selectors`   | The selectors used by the component.    |
| `monthSelect` | The month select used by the component. |
| `yearSelect`  | The year select used by the component.  |
| `weekdays`    | The weekdays used by the component.     |
| `weekday`     | The weekday used by the component.      |
| `days`        | The days used by the component.         |
| `day`         | The day used by the component.          |

## Example

```tsx
import { Calendar } from "@kiyotakkkka/zvs-uikit-lib";
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
