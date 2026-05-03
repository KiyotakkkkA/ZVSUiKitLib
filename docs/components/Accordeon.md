# Accordeon

## Purpose

Collapsible section with compound API and animated content height.

## Import

```tsx
import { Accordeon } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## API

### `Accordeon`

| Prop        | Type      | Default | Description             |
| ----------- | --------- | ------- | ----------------------- |
| defaultOpen | boolean   | `false` | Initial expanded state. |
| className   | string    | -       | Root classes.           |
| children    | ReactNode | -       | Summary/content blocks. |

### `Accordeon.Summary`

| Prop      | Type      | Default | Description               |
| --------- | --------- | ------- | ------------------------- |
| className | string    | -       | Header button classes.    |
| children  | ReactNode | -       | Clickable header content. |

`Accordeon.Summary` автоматически показывает шеврон справа и поворачивает его при открытии/закрытии.

### `Accordeon.Content`

| Prop      | Type      | Default | Description                 |
| --------- | --------- | ------- | --------------------------- |
| className | string    | -       | Expandable content classes. |
| children  | ReactNode | -       | Content inside the section. |

## Example

```tsx
import { Accordeon } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoAccordeon() {
    return (
        <Accordeon defaultOpen>
            <Accordeon.Summary className="text-main-100">
                <span className="text-xs font-semibold">Настройки</span>
            </Accordeon.Summary>

            <Accordeon.Content>Содержимое секции</Accordeon.Content>
        </Accordeon>
    );
}
```
