# TreeView

## Purpose

Hierarchical list with optional virtualization mode.

## Main Component: TreeView

### Props

| Prop         | Type      | Default | Description                           |
| ------------ | --------- | ------- | ------------------------------------- |
| children     | ReactNode | -       | Tree content.                         |
| className    | string    | -       | Root classes.                         |
| classNames   | object    | -       | Root internal slot classes.           |
| virtualized  | boolean   | `false` | Enables virtualized rendering.        |
| height       | number    | `360`   | Height of virtualized viewport.       |
| estimateSize | number    | `34`    | Estimated row height for virtualizer. |
| overscan     | number    | `8`     | Overscan rows for virtualizer.        |

### TreeView classNames slots

| Slot        | Description                         |
| ----------- | ----------------------------------- |
| list        | Non-virtual list wrapper classes.   |
| virtualList | Virtualized scroll wrapper classes. |

## Child Component: TreeView.Catalog

### Props

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

### TreeView.Catalog classNames slots

| Slot        | Description                    |
| ----------- | ------------------------------ |
| trigger     | Catalog header button classes. |
| title       | Catalog title classes.         |
| nested      | Nested list wrapper classes.   |
| chevronIcon | Chevron icon classes.          |
| folderIcon  | Folder icon classes.           |

## Child Component: TreeView.Element

### Props

| Prop       | Type         | Default | Description             |
| ---------- | ------------ | ------- | ----------------------- |
| children   | ReactNode    | -       | Element content.        |
| className  | string       | -       | Element button classes. |
| classNames | object       | -       | Element slot classes.   |
| onClick    | `() => void` | -       | Click handler.          |

### TreeView.Element classNames slots

| Slot    | Description            |
| ------- | ---------------------- |
| content | Inner content wrapper. |

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
