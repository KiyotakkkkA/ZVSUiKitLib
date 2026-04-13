# TreeView

## Purpose

Hierarchical list with optional virtualization mode.

## Main Component: TreeView

### Props

| Prop         | Type      | Default | Description                           |
| ------------ | --------- | ------- | ------------------------------------- |
| children     | ReactNode | -       | Tree content.                         |
| className    | string    | `""`    | Root classes.                         |
| virtualized  | boolean   | `false` | Enables virtualized rendering.        |
| height       | number    | `360`   | Height of virtualized viewport.       |
| estimateSize | number    | `34`    | Estimated row height for virtualizer. |
| overscan     | number    | `8`     | Overscan rows for virtualizer.        |

## Child Component: TreeView.Catalog

### Props

| Prop         | Type      | Default | Description                  |
| ------------ | --------- | ------- | ---------------------------- |
| title        | string    | -       | Catalog title.               |
| children     | ReactNode | -       | Nested elements/catalogs.    |
| defaultOpen  | boolean   | `false` | Initial open state.          |
| className    | string    | `""`    | Catalog wrapper classes.     |
| virtualized  | boolean   | `false` | Virtualize nested list.      |
| height       | number    | `360`   | Virtualized viewport height. |
| estimateSize | number    | `34`    | Estimated item size.         |
| overscan     | number    | `8`     | Virtualizer overscan.        |

## Child Component: TreeView.Element

### Props

| Prop      | Type         | Default | Description             |
| --------- | ------------ | ------- | ----------------------- |
| children  | ReactNode    | -       | Element content.        |
| className | string       | `""`    | Element button classes. |
| onClick   | `() => void` | -       | Click handler.          |

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
