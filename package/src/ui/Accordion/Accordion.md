# Accordion

## Purpose

Collapsible section with compound API and animated content height.

## Import

```tsx
import { Accordion } from "@kiyotakkkka/zvs-uikit-lib/ui";
```

## Props

| Prop        | Type      | Default | Description             |
| ----------- | --------- | ------- | ----------------------- |
| defaultOpen | boolean   | `false` | Initial expanded state. |
| className   | string    | -       | Root classes.           |
| children    | ReactNode | -       | Summary/content blocks. |

## Compound parts

| Component           | Description                            |
| ------------------- | -------------------------------------- |
| `Accordion.Summary` | Clickable header that toggles content. |
| `Accordion.Content` | Expandable content section.            |

### `Accordion.Summary`

| Prop      | Type      | Default | Description               |
| --------- | --------- | ------- | ------------------------- |
| className | string    | -       | Header button classes.    |
| children  | ReactNode | -       | Clickable header content. |

### `Accordion.Content`

| Prop      | Type      | Default | Description                 |
| --------- | --------- | ------- | --------------------------- |
| className | string    | -       | Expandable content classes. |
| children  | ReactNode | -       | Content inside the section. |

## Example

```tsx
import { Accordion } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoAccordion() {
    return (
        <Accordion defaultOpen>
            <Accordion.Summary className="text-main-100">
                <span className="text-xs font-semibold">Настройки</span>
            </Accordion.Summary>

            <Accordion.Content>Содержимое секции</Accordion.Content>
        </Accordion>
    );
}
```
