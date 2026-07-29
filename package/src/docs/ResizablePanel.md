# ResizablePanel

## Table of contents

- [Import](#import)
- [API](#api)
    - [ResizablePanelContextValue](#resizablepanelcontextvalue)
    - [ResizablePanel](#resizablepanel)
    - [ResizablePanel.Sidebar](#resizablepanelsidebar)
    - [ResizablePanel.Content](#resizablepanelcontent)
    - [ResizablePanel.Handle](#resizablepanelhandle)
- [Example](#example)

## Import

```tsx
import { ResizablePanel } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### ResizablePanelContextValue

| Property  | Type                     | Default | Required | Description                                      |
| --------- | ------------------------ | ------- | -------- | ------------------------------------------------ |
| `size`    | `number`                 | -       | Yes      | The current size of the resizable panel.         |
| `setSize` | `(size: number) => void` | -       | Yes      | Function used to set size.                       |
| `minSize` | `number`                 | -       | Yes      | The minimum allowed size of the resizable panel. |
| `maxSize` | `number`                 | -       | Yes      | The maximum allowed size of the resizable panel. |

### ResizablePanel

Extends: `ComponentPropsWithoutRef<"div">`.

| Property      | Type        | Default | Required | Description                                      |
| ------------- | ----------- | ------- | -------- | ------------------------------------------------ |
| `children`    | `ReactNode` | -       | Yes      | The content rendered inside the component.       |
| `defaultSize` | `number`    | `280`   | No       | The initial size of the resizable panel.         |
| `minSize`     | `number`    | `180`   | No       | The minimum allowed size of the resizable panel. |
| `maxSize`     | `number`    | `520`   | No       | The maximum allowed size of the resizable panel. |

### ResizablePanel.Sidebar

Extends: `ComponentPropsWithoutRef<"aside">`.

| Property   | Type        | Default | Required | Description                                |
| ---------- | ----------- | ------- | -------- | ------------------------------------------ |
| `children` | `ReactNode` | -       | Yes      | The content rendered inside the component. |

### ResizablePanel.Content

Extends: `ComponentPropsWithoutRef<"main">`.

| Property   | Type        | Default | Required | Description                                |
| ---------- | ----------- | ------- | -------- | ------------------------------------------ |
| `children` | `ReactNode` | -       | Yes      | The content rendered inside the component. |

### ResizablePanel.Handle

```ts
type ResizablePanelHandleProps = ComponentPropsWithoutRef<"div">;
```

## Example

```tsx
"use client";
import { ResizablePanel } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoResizablePanel() {
    return (
        <ResizablePanel defaultSize={260} minSize={200} maxSize={420}>
            <ResizablePanel.Sidebar className="p-4">
                Sidebar
            </ResizablePanel.Sidebar>
            <ResizablePanel.Handle />
            <ResizablePanel.Content className="p-4">
                Content
            </ResizablePanel.Content>
        </ResizablePanel>
    );
}
```
