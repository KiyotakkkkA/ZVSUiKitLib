# ContextMenu

## Purpose

Compound context menu opened from a right-click trigger.

## Import

```tsx
import { ContextMenu } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

| Prop     | Type      | Default | Description |
| -------- | --------- | ------- | ----------- |
| children | ReactNode | -       | Menu parts. |

## Compound parts

| Part                     | Description                |
| ------------------------ | -------------------------- |
| `ContextMenu.Trigger`    | Area that opens the menu.  |
| `ContextMenu.Content`    | Floating menu content.     |
| `ContextMenu.Item`       | Clickable menu item.       |
| `ContextMenu.Separator`  | Visual separator.          |
| `ContextMenu.Sub`        | Submenu wrapper.           |
| `ContextMenu.SubTrigger` | Item that opens a submenu. |
| `ContextMenu.SubContent` | Floating submenu content.  |

### `ContextMenu.Trigger` props

| Prop      | Type      | Default | Description           |
| --------- | --------- | ------- | --------------------- |
| disabled  | boolean   | `false` | Disables the trigger. |
| className | string    | -       | Trigger classes.      |
| children  | ReactNode | -       | Trigger content.      |

### `ContextMenu.Content` props

| Prop      | Type      | Default | Description           |
| --------- | --------- | ------- | --------------------- |
| className | string    | -       | Content classes.      |
| children  | ReactNode | -       | Menu items and parts. |

### `ContextMenu.Item` props

| Prop      | Type                  | Default   | Description             |
| --------- | --------------------- | --------- | ----------------------- |
| variant   | "default" \| "danger" | `default` | Item style              |
| inset     | boolean               | `false`   | Adds left padding.      |
| leftSlot  | ReactNode             | -         | Optional leading slot.  |
| rightSlot | ReactNode             | -         | Optional trailing slot. |
| className | string                | -         | Item classes.           |
| children  | ReactNode             | -         | Item content.           |

### `ContextMenu.Sub` props

| Prop       | Type      | Default | Description                              |
| ---------- | --------- | ------- | ---------------------------------------- |
| fixable    | boolean   | `false` | Keeps submenu open when clicking inside. |
| closeDelay | number    | `0`     | Delay in ms before closing submenu.      |
| className  | string    | -       | Submenu wrapper classes.                 |
| children   | ReactNode | -       | `SubTrigger` and `SubContent` parts.     |

### `ContextMenu.SubTrigger` props

| Prop      | Type      | Default | Description             |
| --------- | --------- | ------- | ----------------------- |
| inset     | boolean   | `false` | Adds left padding.      |
| leftSlot  | ReactNode | -       | Optional leading slot.  |
| rightSlot | ReactNode | -       | Optional trailing slot. |
| className | string    | -       | Trigger classes.        |
| children  | ReactNode | -       | Trigger content.        |

### `ContextMenu.SubContent` props

| Prop       | Type      | Default | Description              |
| ---------- | --------- | ------- | ------------------------ |
| sideOffset | number    | `0`     | Distance from trigger.   |
| className  | string    | -       | Submenu content classes. |
| children   | ReactNode | -       | Submenu items and parts. |

## Example

```tsx
import { ContextMenu } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoContextMenu() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger className="rounded-xl border border-main-700 p-6">
                Right click
            </ContextMenu.Trigger>

            <ContextMenu.Content>
                <ContextMenu.Item onClick={() => console.log("Open")}>
                    Open
                </ContextMenu.Item>
                <ContextMenu.Item variant="danger">Delete</ContextMenu.Item>
                <ContextMenu.Sub fixable>
                    <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
                    <ContextMenu.SubContent sideOffset={4}>
                        <ContextMenu.Item>Option 1</ContextMenu.Item>
                        <ContextMenu.Item>Option 2</ContextMenu.Item>
                    </ContextMenu.SubContent>
                </ContextMenu.Sub>
            </ContextMenu.Content>
        </ContextMenu>
    );
}
```
