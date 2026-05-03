# ContextMenu

## Purpose

Compound context menu opened from a right-click trigger.

## Import

```tsx
import { ContextMenu } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

### `ContextMenu`

| Prop     | Type      | Default | Description |
| -------- | --------- | ------- | ----------- |
| children | ReactNode | -       | Menu parts. |

### Compound parts

| Part                     | Description                |
| ------------------------ | -------------------------- |
| `ContextMenu.Trigger`    | Area that opens the menu.  |
| `ContextMenu.Content`    | Floating menu content.     |
| `ContextMenu.Item`       | Clickable menu item.       |
| `ContextMenu.Separator`  | Visual separator.          |
| `ContextMenu.Sub`        | Submenu wrapper.           |
| `ContextMenu.SubTrigger` | Item that opens a submenu. |
| `ContextMenu.SubContent` | Floating submenu content.  |

### Part props

| Part         | Props                                                                 |
| ------------ | --------------------------------------------------------------------- |
| `Trigger`    | `disabled`, standard `div` props.                                     |
| `Content`    | Standard `div` props.                                                 |
| `Item`       | `inset`, `variant`, `leftSlot`, `rightSlot`, standard `button` props. |
| `Sub`        | `fixable`, `closeDelay`, `className`.                                 |
| `SubTrigger` | `inset`, `leftSlot`, `rightSlot`, standard `button` props.            |
| `SubContent` | `sideOffset`, standard `div` props.                                   |

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
