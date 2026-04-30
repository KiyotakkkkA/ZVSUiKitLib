# DataDisplay

## Purpose

Compact list for displaying labeled data rows.

## Props

### DataDisplay

Extends `HTMLAttributes<HTMLDivElement>`.

| Prop      | Type      | Default | Description                    |
| --------- | --------- | ------- | ------------------------------ |
| children  | ReactNode | -       | `DataDisplay.Item` components. |
| bordered  | boolean   | `true`  | Adds border and background.    |
| className | string    | -       | Root classes.                  |

### DataDisplay.Item

Extends `HTMLAttributes<HTMLDivElement>`.

| Prop        | Type      | Default | Description             |
| ----------- | --------- | ------- | ----------------------- |
| label       | ReactNode | -       | Small uppercase label.  |
| value       | ReactNode | -       | Primary value.          |
| description | ReactNode | -       | Supporting description. |
| icon        | ReactNode | -       | Optional leading icon.  |
| rightSlot   | ReactNode | -       | Optional trailing slot. |
| className   | string    | -       | Item classes.           |

## Example

```tsx
import { DataDisplay } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoDataDisplay() {
    return (
        <DataDisplay>
            <DataDisplay.Item label="Status" value="Active" />
            <DataDisplay.Item
                label="Owner"
                value="KiyotakkkkA"
                description="Responsible for this workspace."
                icon={<Icon icon="mdi:tune-variant" width={18} height={18} />}
                rightSlot={
                    <span className="rounded-full bg-main-800 px-2 py-0.5 text-xs text-main-200">
                        online
                    </span>
                }
            />
        </DataDisplay>
    );
}
```
