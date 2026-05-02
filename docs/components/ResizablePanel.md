# ResizablePanel

## Purpose

Compound layout with a resizable sidebar and flexible content area.

## Props

### ResizablePanel

Extends `HTMLAttributes<HTMLDivElement>`.

| Prop        | Type      | Default | Description                      |
| ----------- | --------- | ------- | -------------------------------- |
| children    | ReactNode | -       | Panel parts.                     |
| defaultSize | number    | `280`   | Initial sidebar width in pixels. |
| minSize     | number    | `180`   | Minimum sidebar width in pixels. |
| maxSize     | number    | `520`   | Maximum sidebar width in pixels. |
| className   | string    | -       | Root classes.                    |

### Compound parts

| Part                     | Description                  |
| ------------------------ | ---------------------------- |
| `ResizablePanel.Sidebar` | Resizable sidebar container. |
| `ResizablePanel.Handle`  | Drag handle between areas.   |
| `ResizablePanel.Content` | Flexible main content area.  |

## Example

```tsx
import { ResizablePanel } from "@kiyotakkkka/zvs-uikit-lib/ui";

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
