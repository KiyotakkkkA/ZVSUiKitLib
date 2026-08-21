# Accordion

## Table of contents

- [Import](#import)
- [API](#api)
    - [Accordion](#accordion)
    - [Accordion.Summary](#accordionsummary)
    - [Accordion.Content](#accordioncontent)
    - [AccordionContextValue](#accordioncontextvalue)
- [Example](#example)

## Import

```tsx
import { Accordion } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### Accordion

| Property      | Type                  | Default | Required | Description                                                    |
| ------------- | --------------------- | ------- | -------- | -------------------------------------------------------------- |
| `ref`         | `Ref<HTMLDivElement>` | -       | No       | Receives the accordion root element.                           |
| `defaultOpen` | `boolean`             | `false` | No       | Sets the initial expanded state of the uncontrolled accordion. |
| `className`   | `DivClassName`        | -       | No       | Applies CSS classes to the accordion root element.             |

### Accordion.Summary

| Property    | Type              | Default | Required | Description                                        |
| ----------- | ----------------- | ------- | -------- | -------------------------------------------------- |
| `className` | `ButtonClassName` | -       | No       | Applies CSS classes to the summary trigger button. |

### Accordion.Content

| Property    | Type           | Default | Required | Description                                               |
| ----------- | -------------- | ------- | -------- | --------------------------------------------------------- |
| `className` | `DivClassName` | -       | No       | Applies CSS classes to the collapsible content container. |

### AccordionContextValue

| Property    | Type                                | Default | Required | Description                                                    |
| ----------- | ----------------------------------- | ------- | -------- | -------------------------------------------------------------- |
| `isOpen`    | `boolean`                           | -       | Yes      | Indicates whether the accordion content is expanded.           |
| `setIsOpen` | `Dispatch<SetStateAction<boolean>>` | -       | Yes      | Updates the accordion expanded state.                          |
| `contentId` | `string`                            | -       | Yes      | Identifies the collapsible content region.                     |
| `summaryId` | `string`                            | -       | Yes      | Identifies the summary trigger that labels the content region. |

## Example

```tsx
"use client";
import { Accordion } from "@kiyotakkkka/zvs-uikit-lib";

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
