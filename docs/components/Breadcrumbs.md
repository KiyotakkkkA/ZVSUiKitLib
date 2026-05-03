# Breadcrumbs

## Purpose

Navigation trail for showing the current page location.

## Import

```tsx
import { Breadcrumbs } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

### `Breadcrumbs`

Extends `HTMLAttributes<HTMLElement>`.

| Prop      | Type      | Default | Description              |
| --------- | --------- | ------- | ------------------------ |
| separator | ReactNode | `"/"`   | Separator between items. |
| children  | ReactNode | -       | Breadcrumb items.        |
| className | string    | -       | Root classes.            |

### Compound parts

| Part                    | Description                       |
| ----------------------- | --------------------------------- |
| `Breadcrumbs.Nav`       | Button breadcrumb item.           |
| `Breadcrumbs.Separator` | Custom separator inside the root. |

### Part props

| Part                    | Props                                       |
| ----------------------- | ------------------------------------------- |
| `Breadcrumbs.Nav`       | `label`, `active`, standard `button` props. |
| `Breadcrumbs.Separator` | `children`, standard `span` props.          |

## Example

```tsx
import { Breadcrumbs } from "@kiyotakkkka/zvs-uikit-lib/ui";

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
