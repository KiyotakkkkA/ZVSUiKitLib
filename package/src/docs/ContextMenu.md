# ContextMenu

## Table of contents

- [Import](#import)
- [API](#api)
    - [ContextMenuState](#contextmenustate)
    - [ContextMenu](#contextmenu)
    - [ContextMenu.Trigger](#contextmenutrigger)
    - [ContextMenu.Content](#contextmenucontent)
    - [ContextMenu.Item](#contextmenuitem)
    - [ContextMenu.ItemDanger](#contextmenuitemdanger)
    - [ContextMenu.Label](#contextmenulabel)
    - [ContextMenu.Separator](#contextmenuseparator)
    - [ContextMenu.Sub](#contextmenusub)
    - [ContextMenu.SubTrigger](#contextmenusubtrigger)
    - [ContextMenu.SubContent](#contextmenusubcontent)
- [Example](#example)

## Import

```tsx
import { ContextMenu } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### ContextMenuState

| Property | Type      | Default | Required | Description                  |
| -------- | --------- | ------- | -------- | ---------------------------- |
| `open`   | `boolean` | -       | Yes      | Whether open is enabled.     |
| `x`      | `number`  | -       | Yes      | The x used by the component. |
| `y`      | `number`  | -       | Yes      | The y used by the component. |

### ContextMenu

| Property   | Type        | Default | Required | Description                                |
| ---------- | ----------- | ------- | -------- | ------------------------------------------ |
| `children` | `ReactNode` | -       | Yes      | The content rendered inside the component. |

### ContextMenu.Trigger

Extends: `ComponentPropsWithoutRef<"div">`.

| Property   | Type        | Default | Required | Description                                |
| ---------- | ----------- | ------- | -------- | ------------------------------------------ |
| `children` | `ReactNode` | -       | Yes      | The content rendered inside the component. |
| `disabled` | `boolean`   | `false` | No       | Whether disabled is enabled.               |

### ContextMenu.Content

Extends: `ComponentPropsWithoutRef<"div">`.

| Property   | Type        | Default | Required | Description                                |
| ---------- | ----------- | ------- | -------- | ------------------------------------------ |
| `children` | `ReactNode` | -       | Yes      | The content rendered inside the component. |

### ContextMenu.Item

Extends: `ComponentPropsWithoutRef<"button">`.

| Property    | Type        | Default | Required | Description                           |
| ----------- | ----------- | ------- | -------- | ------------------------------------- |
| `inset`     | `boolean`   | -       | No       | The inset used by the component.      |
| `leftSlot`  | `ReactNode` | -       | No       | The left slot used by the component.  |
| `rightSlot` | `ReactNode` | -       | No       | The right slot used by the component. |

### ContextMenu.ItemDanger

```ts
type ContextMenuItemDangerProps = ContextMenuItemProps;
```

### ContextMenu.Label

Extends: `ComponentPropsWithoutRef<"div">`.

| Property | Type      | Default | Required | Description                      |
| -------- | --------- | ------- | -------- | -------------------------------- |
| `inset`  | `boolean` | `false` | No       | The inset used by the component. |

### ContextMenu.Separator

```ts
type ContextMenuSeparatorProps = ComponentPropsWithoutRef<"div">;
```

### ContextMenu.Sub

| Property     | Type           | Default | Required | Description                                |
| ------------ | -------------- | ------- | -------- | ------------------------------------------ |
| `children`   | `ReactNode`    | -       | Yes      | The content rendered inside the component. |
| `fixable`    | `boolean`      | `false` | No       | The fixable used by the component.         |
| `closeDelay` | `number`       | `140`   | No       | Function used to close delay.              |
| `className`  | `DivClassName` | -       | No       | CSS classes applied to the root element.   |

### ContextMenu.SubTrigger

Extends: `ComponentPropsWithoutRef<"button">`.

| Property    | Type        | Default | Required | Description                           |
| ----------- | ----------- | ------- | -------- | ------------------------------------- |
| `inset`     | `boolean`   | `false` | No       | The inset used by the component.      |
| `leftSlot`  | `ReactNode` | -       | No       | The left slot used by the component.  |
| `rightSlot` | `ReactNode` | -       | No       | The right slot used by the component. |

### ContextMenu.SubContent

Extends: `ComponentPropsWithoutRef<"div">`.

| Property     | Type        | Default | Required | Description                                |
| ------------ | ----------- | ------- | -------- | ------------------------------------------ |
| `children`   | `ReactNode` | -       | Yes      | The content rendered inside the component. |
| `sideOffset` | `number`    | `4`     | No       | The side offset used by the component.     |

## Example

```tsx
"use client";
import { ContextMenu } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoContextMenu() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger className="rounded-xl border border-main-700 p-6">
                Right click
            </ContextMenu.Trigger>

            <ContextMenu.Content>
                <ContextMenu.Label>File</ContextMenu.Label>
                <ContextMenu.Item onClick={() => console.log("Open")}>
                    Open
                </ContextMenu.Item>
                <ContextMenu.Sub fixable>
                    <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
                    <ContextMenu.SubContent sideOffset={4}>
                        <ContextMenu.Item>Option 1</ContextMenu.Item>
                        <ContextMenu.Item>Option 2</ContextMenu.Item>
                    </ContextMenu.SubContent>
                </ContextMenu.Sub>
                <ContextMenu.Separator />
                <ContextMenu.ItemDanger>Delete</ContextMenu.ItemDanger>
            </ContextMenu.Content>
        </ContextMenu>
    );
}
```
