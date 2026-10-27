# Breadcrumbs

## Table of contents

- [Import](#import)
- [API](#api)
    - [Breadcrumbs](#breadcrumbs)
    - [Breadcrumbs.Nav](#breadcrumbsnav)
    - [Breadcrumbs.Separator](#breadcrumbsseparator)
    - [BreadcrumbsContextValue](#breadcrumbscontextvalue)
- [Example](#example)

## Import

```tsx
import { Breadcrumbs } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### Breadcrumbs

Extends: `ComponentPropsWithoutRef<"nav">`.

| Property    | Type               | Default | Required | Description                                               |
| ----------- | ------------------ | ------- | -------- | --------------------------------------------------------- |
| `ref`       | `Ref<HTMLElement>` | -       | No       | Receives the breadcrumbs \`<nav>\` element.               |
| `separator` | `ReactNode`        | `"/"`   | No       | Replaces the separator rendered between breadcrumb items. |
| `children`  | `ReactNode`        | -       | Yes      | Renders breadcrumb navigation items.                      |

### Breadcrumbs.Nav

Extends: `Omit< ComponentPropsWithoutRef<"button">, "children" >`.

| Property | Type        | Default | Required | Description                                                 |
| -------- | ----------- | ------- | -------- | ----------------------------------------------------------- |
| `label`  | `ReactNode` | -       | Yes      | Renders the breadcrumb item label.                          |
| `active` | `boolean`   | `false` | No       | Marks the item as the current page and disables it.         |
| `href`   | `string`    | -       | No       | Renders the item as an `<a>` link to this URL instead of a button. |
| `target` | `HTMLAttributeAnchorTarget` | - | No | The link target, used together with `href`. |
| `rel`    | `string`    | -       | No       | The link relationship, used together with `href`. |
| `onClick` | `MouseEventHandler<HTMLElement>` | - | No | Runs when the item is clicked. |

### Breadcrumbs.Separator

Extends: `ComponentPropsWithoutRef<"span">`.

| Property   | Type        | Default | Required | Description                                                 |
| ---------- | ----------- | ------- | -------- | ----------------------------------------------------------- |
| `children` | `ReactNode` | -       | No       | Replaces the separator inherited from the breadcrumbs root. |

### BreadcrumbsContextValue

| Property    | Type        | Default | Required | Description                                             |
| ----------- | ----------- | ------- | -------- | ------------------------------------------------------- |
| `separator` | `ReactNode` | -       | Yes      | Stores the separator shared by nested breadcrumb parts. |

```tsx
"use client";
import { Breadcrumbs } from "@kiyotakkkka/zvs-uikit-lib";

export function BreadcrumbsPreview() {
    return (
        <Breadcrumbs separator={<span>/</span>}>
            <Breadcrumbs.Nav label="Main" onClick={() => {}} />
            <Breadcrumbs.Nav label="Projects" onClick={() => {}} />
            <Breadcrumbs.Nav label="Current Project" active />
        </Breadcrumbs>
    );
}
```
