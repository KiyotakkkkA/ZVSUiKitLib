# ResizablePanel

## Table of contents

- [Import](#import)
- [API](#api)
    - [ResizablePanelOrientation](#resizablepanelorientation)
    - [ResizablePanelContextValue](#resizablepanelcontextvalue)
    - [ResizablePanel](#resizablepanel)
    - [ResizablePanelSidebarProps](#resizablepanelsidebarprops)
    - [ResizablePanelContentProps](#resizablepanelcontentprops)
    - [ResizablePanelHandleProps](#resizablepanelhandleprops)
- [Example](#example)

## Import

```tsx
import { ResizablePanel } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### ResizablePanelOrientation

```ts
type ResizablePanelOrientation = "horizontal" | "vertical";
```

### ResizablePanelContextValue

| Property       | Type                        | Default | Required | Description              |
| -------------- | --------------------------- | ------- | -------- | ------------------------ |
| `size`         | `number`                    | -       | Yes      | No description provided. |
| `minSize`      | `number`                    | -       | Yes      | No description provided. |
| `maxSize`      | `number`                    | -       | Yes      | No description provided. |
| `defaultSize`  | `number`                    | -       | Yes      | No description provided. |
| `keyboardStep` | `number`                    | -       | Yes      | No description provided. |
| `orientation`  | `ResizablePanelOrientation` | -       | Yes      | No description provided. |
| `disabled`     | `boolean`                   | -       | Yes      | No description provided. |
| `resizing`     | `boolean`                   | -       | Yes      | No description provided. |
| `sidebarId`    | `string`                    | -       | Yes      | No description provided. |
| `resizeTo`     | `(size: number) => number`  | -       | Yes      | No description provided. |
| `startResize`  | `() => void`                | -       | Yes      | No description provided. |
| `endResize`    | `() => void`                | -       | Yes      | No description provided. |

### ResizablePanel

Extends: `ComponentPropsWithoutRef<"div">`.

| Property        | Type                        | Default | Required | Description                                        |
| --------------- | --------------------------- | ------- | -------- | -------------------------------------------------- |
| `children`      | `ReactNode`                 | -       | Yes      | No description provided.                           |
| `size`          | `number`                    | -       | No       | Controlled primary panel size in pixels.           |
| `defaultSize`   | `number`                    | -       | No       | Initial uncontrolled primary panel size in pixels. |
| `minSize`       | `number`                    | -       | No       | No description provided.                           |
| `maxSize`       | `number`                    | -       | No       | No description provided.                           |
| `orientation`   | `ResizablePanelOrientation` | -       | No       | No description provided.                           |
| `keyboardStep`  | `number`                    | -       | No       | No description provided.                           |
| `disabled`      | `boolean`                   | -       | No       | No description provided.                           |
| `onSizeChange`  | `(size: number) => void`    | -       | No       | No description provided.                           |
| `onResizeStart` | `(size: number) => void`    | -       | No       | No description provided.                           |
| `onResizeEnd`   | `(size: number) => void`    | -       | No       | No description provided.                           |

### ResizablePanelSidebarProps

Extends: `ComponentPropsWithoutRef<"aside">`.

| Property   | Type        | Default | Required | Description              |
| ---------- | ----------- | ------- | -------- | ------------------------ |
| `children` | `ReactNode` | -       | Yes      | No description provided. |

### ResizablePanelContentProps

Extends: `ComponentPropsWithoutRef<"main">`.

| Property   | Type        | Default | Required | Description              |
| ---------- | ----------- | ------- | -------- | ------------------------ |
| `children` | `ReactNode` | -       | Yes      | No description provided. |

### ResizablePanelHandleProps

Extends: `ComponentPropsWithoutRef<"div">`.

| Property             | Type      | Default | Required | Description                                             |
| -------------------- | --------- | ------- | -------- | ------------------------------------------------------- |
| `aria-label`         | `string`  | -       | No       | No description provided.                                |
| `resetOnDoubleClick` | `boolean` | -       | No       | Restores defaultSize when the handle is double-clicked. |

```tsx
import { ResizablePanel } from "@kiyotakkkka/zvs-uikit-lib";

<ResizablePanel defaultSize={220} minSize={140} maxSize={360}>
    <ResizablePanel.Sidebar>Navigation</ResizablePanel.Sidebar>
    <ResizablePanel.Handle aria-label="Resize navigation" />
    <ResizablePanel.Content>Workspace</ResizablePanel.Content>
</ResizablePanel>;
```

Use `size` with `onSizeChange` for controlled state. Set `orientation="vertical"` to resize the primary panel height.

## Root props

| Prop            | Type                         | Default        | Description                                 |
| --------------- | ---------------------------- | -------------- | ------------------------------------------- |
| `size`          | `number`                     | —              | Controlled primary panel size.              |
| `defaultSize`   | `number`                     | `280`          | Initial uncontrolled size and reset target. |
| `minSize`       | `number`                     | `180`          | Minimum size.                               |
| `maxSize`       | `number`                     | `520`          | Maximum size.                               |
| `orientation`   | `"horizontal" \| "vertical"` | `"horizontal"` | Layout and resize axis.                     |
| `keyboardStep`  | `number`                     | `10`           | Arrow-key increment.                        |
| `disabled`      | `boolean`                    | `false`        | Disables resizing.                          |
| `onSizeChange`  | `(size: number) => void`     | —              | Runs for each requested size change.        |
| `onResizeStart` | `(size: number) => void`     | —              | Runs when interaction starts.               |
| `onResizeEnd`   | `(size: number) => void`     | —              | Runs when interaction ends.                 |

All parts accept native props and refs for their underlying element. `Handle` additionally accepts `resetOnDoubleClick`, which defaults to `true`.
