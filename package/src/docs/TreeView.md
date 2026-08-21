# TreeView

## Table of contents

- [Import](#import)
- [API](#api)
    - [TreeViewVirtualizationProps](#treeviewvirtualizationprops)
    - [TreeView](#treeview)
    - [TreeView.Catalog](#treeviewcatalog)
        - [TreeViewCatalogClassNames](#treeviewcatalogclassnames)
    - [TreeView.Element](#treeviewelement)
        - [TreeViewElementClassNames](#treeviewelementclassnames)
    - [VirtualizedChildrenListProps](#virtualizedchildrenlistprops)
        - [VirtualizedChildrenListClassNames](#virtualizedchildrenlistclassnames)
- [Example](#example)

## Import

```tsx
import { TreeView } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### TreeViewVirtualizationProps

| Property       | Type      | Default | Required | Description                                                      |
| -------------- | --------- | ------- | -------- | ---------------------------------------------------------------- |
| `virtualized`  | `boolean` | -       | No       | Enables row virtualization for large trees.                      |
| `height`       | `number`  | -       | No       | Sets the virtualized tree viewport height in pixels.             |
| `estimateSize` | `number`  | -       | No       | Provides the estimated height of each virtualized row in pixels. |
| `overscan`     | `number`  | -       | No       | Sets the number of rows rendered outside the visible viewport.   |

### TreeView

Extends: `TreeViewVirtualizationProps`, `ComponentPropsWithoutRef<"div">`.

| Property   | Type                  | Default | Required | Description                                            |
| ---------- | --------------------- | ------- | -------- | ------------------------------------------------------ |
| `ref`      | `Ref<HTMLDivElement>` | -       | No       | Receives the tree root element.                        |
| `children` | `ReactNode`           | -       | Yes      | Renders the tree nodes inside the root tree container. |

### TreeView.Catalog

Extends: `TreeViewVirtualizationProps`, `Omit<ComponentPropsWithoutRef<"div">, "title">`.

| Property       | Type                        | Default | Required | Description                                                       |
| -------------- | --------------------------- | ------- | -------- | ----------------------------------------------------------------- |
| `title`        | `ReactNode`                 | -       | Yes      | Renders the catalog label inside its trigger.                     |
| `children`     | `ReactNode`                 | -       | No       | Renders nested tree nodes revealed when the catalog is open.      |
| `open`         | `boolean`                   | -       | No       | Controls whether the catalog is expanded.                         |
| `defaultOpen`  | `boolean`                   | `false` | No       | Sets the initial expanded state when the catalog is uncontrolled. |
| `onOpenChange` | `(open: boolean) => void`   | -       | No       | Runs when the catalog expanded state changes.                     |
| `icon`         | `ReactNode`                 | -       | No       | Replaces the default closed-folder icon.                          |
| `openIcon`     | `ReactNode`                 | -       | No       | Replaces the default open-folder icon.                            |
| `rightSlot`    | `ReactNode`                 | -       | No       | Renders trailing content at the end of the catalog trigger.       |
| `classNames`   | `TreeViewCatalogClassNames` | -       | No       | Applies CSS classes to the catalog slots.                         |

### TreeViewCatalogClassNames

| Property         | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| `trigger`        | Applies CSS classes to the catalog trigger button.             |
| `title`          | Applies CSS classes to the catalog title.                      |
| `nested`         | Applies CSS classes to the nested child container.             |
| `chevronIcon`    | Applies CSS classes to the expand/collapse chevron SVG.        |
| `folderIcon`     | Applies CSS classes to the folder icon wrapper.                |
| `rightSlot`      | Applies CSS classes to the trailing content wrapper.           |
| `virtualContent` | Applies CSS classes to the virtualized list content container. |
| `virtualItem`    | Applies CSS classes to each virtualized row.                   |

### TreeView.Element

Extends: `Omit< ComponentPropsWithoutRef<"button">, "children" >`.

| Property      | Type                        | Default | Required | Description                                                        |
| ------------- | --------------------------- | ------- | -------- | ------------------------------------------------------------------ |
| `label`       | `ReactNode`                 | -       | No       | Renders the primary text when custom children are not provided.    |
| `description` | `ReactNode`                 | -       | No       | Renders supporting text below the label.                           |
| `children`    | `ReactNode`                 | -       | No       | Replaces the generated label and description content.              |
| `selected`    | `boolean`                   | `false` | No       | Marks the tree element as selected and applies its selected style. |
| `disabled`    | `boolean`                   | `false` | No       | Prevents interaction with the tree element.                        |
| `icon`        | `ReactNode`                 | -       | No       | Renders a leading icon before the element content.                 |
| `rightSlot`   | `ReactNode`                 | -       | No       | Renders trailing content after the element content.                |
| `classNames`  | `TreeViewElementClassNames` | -       | No       | Applies CSS classes to the tree element slots.                     |

### TreeViewElementClassNames

| Property      | Description                                               |
| ------------- | --------------------------------------------------------- |
| `icon`        | Applies CSS classes to the leading icon wrapper.          |
| `content`     | Applies CSS classes to the label and description wrapper. |
| `label`       | Applies CSS classes to the element label.                 |
| `description` | Applies CSS classes to the element description.           |
| `rightSlot`   | Applies CSS classes to the trailing content wrapper.      |

### VirtualizedChildrenListProps

| Property       | Type                                | Default | Required | Description                                                      |
| -------------- | ----------------------------------- | ------- | -------- | ---------------------------------------------------------------- |
| `children`     | `ReactNode`                         | -       | No       | Supplies the children rendered as virtualized rows.              |
| `className`    | `DivClassName`                      | -       | No       | Applies CSS classes to the virtualized viewport.                 |
| `classNames`   | `VirtualizedChildrenListClassNames` | -       | No       | Applies CSS classes to the virtualized list slots.               |
| `height`       | `number`                            | -       | Yes      | Sets the virtualized viewport height in pixels.                  |
| `estimateSize` | `number`                            | -       | Yes      | Provides the estimated height of each virtualized row in pixels. |
| `overscan`     | `number`                            | -       | Yes      | Sets the number of rows rendered outside the visible viewport.   |

### VirtualizedChildrenListClassNames

| Property  | Description                                                    |
| --------- | -------------------------------------------------------------- |
| `content` | Applies CSS classes to the virtualized list content container. |
| `item`    | Applies CSS classes to each virtualized row.                   |

## Example

```tsx
"use client";
import { TreeView } from "@kiyotakkkka/zvs-uikit-lib";

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
