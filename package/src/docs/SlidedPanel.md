# SlidedPanel

## Table of contents

- [Import](#import)
- [API](#api)
    - [SlidedPanelPlacement](#slidedpanelplacement)
    - [SlidedPanel](#slidedpanel)
    - [SlidedPanel.Header](#slidedpanelheader)
    - [SlidedPanel.Title](#slidedpaneltitle)
    - [SlidedPanel.Subtitle](#slidedpanelsubtitle)
    - [SlidedPanel.Content](#slidedpanelcontent)
    - [SlidedPanel.Footer](#slidedpanelfooter)
    - [SlidedPanelContextValue](#slidedpanelcontextvalue)
- [Example](#example)

## Import

```tsx
import { SlidedPanel } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### SlidedPanelPlacement

```ts
type SlidedPanelPlacement = "top" | "right" | "bottom" | "left";
```

### SlidedPanel

| Property              | Type                                       | Default   | Required | Description                                                           |
| --------------------- | ------------------------------------------ | --------- | -------- | --------------------------------------------------------------------- |
| `ref`                 | `Ref<HTMLElement>`                         | -         | No       | Receives the panel \`<section>\` element.                             |
| `open`                | `boolean`                                  | -         | Yes      | Whether open is enabled.                                              |
| `onClose`             | `() => void`                               | -         | Yes      | Callback invoked when close occurs.                                   |
| `closeOnOverlayClick` | `boolean`                                  | `true`    | No       | Function used to close on overlay click.                              |
| `closeOnEscape`       | `boolean`                                  | `true`    | No       | Whether the Escape key closes the panel.                              |
| `label`               | `string`                                   | -         | No       | Accessible name used when the panel renders no \`SlidedPanel.Title\`. |
| `panelPlacement`      | `SlidedPanelPlacement`                     | `"right"` | No       | The screen edge from which the panel opens.                           |
| `className`           | `HTMLAttributes<HTMLElement>["className"]` | -         | No       | CSS classes applied to the root element.                              |

### SlidedPanel.Header

```ts
type SlidedPanelHeaderProps = HTMLAttributes<HTMLElement>;
```

### SlidedPanel.Title

```ts
type SlidedPanelTitleProps = HTMLAttributes<HTMLParagraphElement>;
```

### SlidedPanel.Subtitle

```ts
type SlidedPanelSubtitleProps = HTMLAttributes<HTMLParagraphElement>;
```

### SlidedPanel.Content

```ts
type SlidedPanelContentProps = HTMLAttributes<HTMLDivElement>;
```

### SlidedPanel.Footer

```ts
type SlidedPanelFooterProps = HTMLAttributes<HTMLElement>;
```

### SlidedPanelContextValue

| Property  | Type         | Default | Required | Description                         |
| --------- | ------------ | ------- | -------- | ----------------------------------- |
| `open`    | `boolean`    | -       | Yes      | Whether open is enabled.            |
| `onClose` | `() => void` | -       | Yes      | Callback invoked when close occurs. |

```tsx
"use client";
import { useState } from "react";
import { SlidedPanel, Button } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoSlidedPanel() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open panel</Button>

            <SlidedPanel
                open={open}
                onClose={() => setOpen(false)}
                panelPlacement="right"
            >
                <SlidedPanel.Header>
                    <SlidedPanel.Title>Filters</SlidedPanel.Title>
                    <SlidedPanel.Subtitle>
                        Adjust parameters
                    </SlidedPanel.Subtitle>
                </SlidedPanel.Header>

                <SlidedPanel.Content>Panel content</SlidedPanel.Content>

                <SlidedPanel.Footer className="flex justify-end gap-2">
                    <Button variant="ghost" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={() => setOpen(false)}>Apply</Button>
                </SlidedPanel.Footer>
            </SlidedPanel>
        </>
    );
}
```

### Top panel example

```tsx
<SlidedPanel
    open={open}
    onClose={() => setOpen(false)}
    panelPlacement="top"
    className="h-56"
>
    <SlidedPanel.Header>
        <SlidedPanel.Title>Drawer Title</SlidedPanel.Title>
    </SlidedPanel.Header>

    <SlidedPanel.Content>Panel content</SlidedPanel.Content>
</SlidedPanel>
```
