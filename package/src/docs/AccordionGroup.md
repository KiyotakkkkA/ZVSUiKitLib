# AccordionGroup

## Table of contents

- [Import](#import)
- [API](#api)
    - [AccordionGroup](#accordiongroup)
- [Example](#example)

## Import

```tsx
import { AccordionGroup } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### AccordionGroup

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property   | Type                       | Default      | Required | Description                                              |
| ---------- | -------------------------- | ------------ | -------- | -------------------------------------------------------- |
| `ref`      | `Ref<HTMLDivElement>`      | -            | No       | Receives the group root element.                         |
| `showMode` | `"only-one" \| "multiple"` | `"multiple"` | No       | Sets how many accordions can be open at the same time.   |
| `children` | `ReactNode`                | -            | Yes      | Renders the grouped accordions.                          |

```tsx
"use client";
import { Accordion, AccordionGroup } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoAccordionGroup() {
    return (
        <AccordionGroup showMode="only-one">
            <Accordion defaultOpen>
                <Accordion.Summary>Account</Accordion.Summary>
                <Accordion.Content>Profile details and sign-in email.</Accordion.Content>
            </Accordion>
            <Accordion>
                <Accordion.Summary>Billing</Accordion.Summary>
                <Accordion.Content>Current plan and invoices.</Accordion.Content>
            </Accordion>
        </AccordionGroup>
    );
}
```
