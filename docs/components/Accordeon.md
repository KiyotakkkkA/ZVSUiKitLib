# Accordeon

## Purpose

Collapsible section with compound API and animated content height.

## Main Component: Accordeon

### Props

| Prop        | Type      | Default | Description             |
| ----------- | --------- | ------- | ----------------------- |
| defaultOpen | boolean   | `false` | Initial expanded state. |
| className   | string    | -       | Root classes.           |
| children    | ReactNode | -       | Summary/content blocks. |

## Child Component: Accordeon.Summary

### Props

| Prop      | Type      | Default | Description               |
| --------- | --------- | ------- | ------------------------- |
| className | string    | -       | Header button classes.    |
| children  | ReactNode | -       | Clickable header content. |

## Child Component: Accordeon.Content

### Props

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
            <Accordeon.Summary className="flex items-center justify-between gap-2 text-main-100">
                <span className="text-xs font-semibold">Настройки</span>
                <span className="text-main-400">v</span>
            </Accordeon.Summary>

            <Accordeon.Content>Содержимое секции</Accordeon.Content>
        </Accordeon>
    );
}
```
