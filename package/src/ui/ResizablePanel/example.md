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
