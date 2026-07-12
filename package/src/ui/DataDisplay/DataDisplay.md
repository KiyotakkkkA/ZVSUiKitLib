# DataDisplay

## Purpose

Compound layout for compact, structured data rows.

## Import

```tsx
import { DataDisplay } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop      | Type            | Default        | Description                 |
| --------- | --------------- | -------------- | --------------------------- |
| children  | ReactNode       | -              | `DataDisplay.Item` rows.   |
| bordered  | boolean         | `true`         | Adds border and background. |
| rounded   | [`RoundVariants`](../../docs/dict.md#roundvariants) | `"rounded-lg"` | Container radius. |
| className | string          | -              | Root classes.               |

## Compound parts

| Component                            | Description                         |
| ------------------------------------ | ----------------------------------- |
| `DataDisplay.Item`                   | Structured data row.                |
| `DataDisplay.ItemTopTitle`           | Small uppercase label.              |
| `DataDisplay.ItemTopSubTitle`        | Primary value below the label.      |
| `DataDisplay.ItemContentTitle`       | Optional additional content title.  |
| `DataDisplay.ItemContentDescription` | Supporting description.             |
| `DataDisplay.ItemContentIcon`        | Leading icon container.             |
| `DataDisplay.ItemContentBadge`       | Trailing badge or status container. |

Every compound part accepts `children`, `className`, and the remaining native
`HTMLAttributes<HTMLDivElement>`.

## Example

```tsx
"use client";
import { Icon } from "@iconify/react";
import { DataDisplay } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoDataDisplay() {
    return (
        <DataDisplay>
            <DataDisplay.Item>
                <DataDisplay.ItemTopTitle>Status</DataDisplay.ItemTopTitle>
                <DataDisplay.ItemTopSubTitle>Active</DataDisplay.ItemTopSubTitle>
            </DataDisplay.Item>

            <DataDisplay.Item>
                <DataDisplay.ItemTopTitle>Owner</DataDisplay.ItemTopTitle>
                <DataDisplay.ItemTopSubTitle>KiyotakkkkA</DataDisplay.ItemTopSubTitle>
                <DataDisplay.ItemContentIcon>
                    <Icon icon="mdi:tune-variant" width={18} height={18} />
                </DataDisplay.ItemContentIcon>
                <DataDisplay.ItemContentDescription>
                    Responsible for this workspace.
                </DataDisplay.ItemContentDescription>
                <DataDisplay.ItemContentBadge>
                    <span className="rounded-full bg-main-800 px-2 py-0.5 text-xs text-main-200">
                        online
                    </span>
                </DataDisplay.ItemContentBadge>
            </DataDisplay.Item>
        </DataDisplay>
    );
}
```
