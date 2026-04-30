# Breadcrumbs

## Purpose

Navigation trail for showing the current page location.

## Props

### Breadcrumbs

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
| `Breadcrumbs.Link`      | Anchor breadcrumb item.           |
| `Breadcrumbs.Separator` | Custom separator inside the root. |

### Item props

| Part               | Props                                       |
| ------------------ | ------------------------------------------- |
| `Breadcrumbs.Nav`  | `label`, `active`, standard `button` props. |
| `Breadcrumbs.Link` | `label`, `active`, standard `a` props.      |

## Example

```tsx
import { Breadcrumbs } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoBreadcrumbs() {
    return (
        <Breadcrumbs separator={<span>/</span>}>
            <Breadcrumbs.Nav label="Main" onClick={() => {}} />
            <Breadcrumbs.Nav label="Projects" onClick={() => {}} />
            <Breadcrumbs.Nav label="Current Project" active />
        </Breadcrumbs>
}
```
