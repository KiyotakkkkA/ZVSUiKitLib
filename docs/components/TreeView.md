# TreeView

## Purpose

Hierarchical list with optional virtualization mode.

## Import

```tsx
import { TreeView } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## API

### `TreeView`


| Prop         | Type      | Default | Description                           |
| ------------ | --------- | ------- | ------------------------------------- |
| children     | ReactNode | -       | Tree content.                         |
| className    | string    | -       | Root classes.                         |
| virtualized  | boolean   | `false` | Enables virtualized rendering.        |
| height       | number    | `360`   | Height of virtualized viewport.       |
| estimateSize | number    | `34`    | Estimated row height for virtualizer. |
| overscan     | number    | `8`     | Overscan rows for virtualizer.        |

### `TreeView.Catalog`


| Prop         | Type      | Default | Description                    |
| ------------ | --------- | ------- | ------------------------------ |
| title        | string    | -       | Catalog title.                 |
| children     | ReactNode | -       | Nested elements/catalogs.      |
| defaultOpen  | boolean   | `false` | Initial open state.            |
| className    | string    | -       | Catalog wrapper classes.       |
| classNames   | object    | -       | Catalog internal slot classes. |
| virtualized  | boolean   | `false` | Virtualize nested list.        |
| height       | number    | `360`   | Virtualized viewport height.   |
| estimateSize | number    | `34`    | Estimated item size.           |
| overscan     | number    | `8`     | Virtualizer overscan.          |

### `TreeView.Catalog` `classNames` slots

| Slot        | Description                    |
| ----------- | ------------------------------ |
| trigger     | Catalog header button classes. |
| title       | Catalog title classes.         |
| nested      | Nested list wrapper classes.   |
| chevronIcon | Chevron icon classes.          |
| folderIcon  | Folder icon classes.           |

Additional catalog slots:

| Slot           | Description                         |
| -------------- | ----------------------------------- |
| rightSlot      | Right-side slot classes.            |
| virtualContent | Virtualized content wrapper classes. |
| virtualItem    | Virtualized item wrapper classes.    |

### `TreeView.Element`


| Prop       | Type         | Default | Description             |
| ---------- | ------------ | ------- | ----------------------- |
| children   | ReactNode    | -       | Element content.        |
| className  | string       | -       | Element button classes. |
| classNames | object       | -       | Element slot classes.   |
| onClick    | `() => void` | -       | Click handler.          |

### `TreeView.Element` `classNames` slots

| Slot    | Description            |
| ------- | ---------------------- |
| content | Inner content wrapper. |

Additional element slots:

| Slot        | Description               |
| ----------- | ------------------------- |
| icon        | Leading icon classes.     |
| label       | Label text classes.       |
| description | Description text classes. |
| rightSlot   | Right-side slot classes.  |

## Notes

- Root `TreeView` styles only the root wrapper through `className`.
- Internal catalog/element styling belongs to `TreeView.Catalog classNames` and `TreeView.Element classNames`.

## Example

```tsx
import { TreeView } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoTreeView() {
    return (
        <TreeView>
            <TreeView.Catalog title="Frontend" defaultOpen>
                <TreeView.Element>React</TreeView.Element>
                <TreeView.Element>TypeScript</TreeView.Element>
            </TreeView.Catalog>
            <TreeView.Catalog title="Backend">
                <TreeView.Element>Node.js</TreeView.Element>
            </TreeView.Catalog>
        </TreeView>
    );
}
```
