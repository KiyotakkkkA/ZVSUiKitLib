# Breadcrumbs

## Purpose

Navigation trail for showing the current page location.

## Import

```tsx
import { Breadcrumbs } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

| Prop      | Type      | Default | Description              |
| --------- | --------- | ------- | ------------------------ |
| separator | ReactNode | `"/"`   | Separator between items. |
| children  | ReactNode | -       | Breadcrumb items.        |
| className | string    | -       | Root classes.            |

## Compound parts

| Part              | Description             |
| ----------------- | ----------------------- |
| `Breadcrumbs.Nav` | Button breadcrumb item. |

### `Breadcrumbs.Nav` props

| Prop      | Type         | Default | Description                        |
| --------- | ------------ | ------- | ---------------------------------- |
| label     | string       | -       | Text content of the breadcrumb.    |
| active    | boolean      | `false` | Active state (non-clickable item). |
| onClick   | `() => void` | -       | Click handler for navigation.      |
| className | string       | -       | Breadcrumb item classes.           |

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
