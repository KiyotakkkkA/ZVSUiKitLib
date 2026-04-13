# Accordeon

## Purpose

Collapsible section with animated content height.

## Props

| Prop             | Type      | Default | Description                   |
| ---------------- | --------- | ------- | ----------------------------- |
| title            | string    | -       | Section title.                |
| subtitle         | string    | -       | Optional subtitle.            |
| defaultOpen      | boolean   | `false` | Initial expanded state.       |
| className        | string    | -       | Root classes.                 |
| titleIcon        | ReactNode | -       | Icon before title.            |
| headerClassName  | string    | -       | Header button classes.        |
| contentClassName | string    | -       | Content wrapper classes.      |
| rightSlot        | ReactNode | -       | Right-side content in header. |
| children         | ReactNode | -       | Section content.              |

## Example

```tsx
import { Accordeon } from "@kiyotakkkka/zvs-uikit-lib/ui";

export function DemoAccordeon() {
    return (
        <Accordeon title="Settings" subtitle="Expand for details" defaultOpen>
            Section content
        </Accordeon>
    );
}
```
