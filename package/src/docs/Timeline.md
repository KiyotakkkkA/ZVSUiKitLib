# Timeline

## Table of contents

- [Import](#import)
- [API](#api)
    - [Timeline](#timeline)
    - [Timeline.Item](#timelineitem)
    - [Timeline.ItemTitle](#timelineitemtitle)
    - [Timeline.ItemSubTitle](#timelineitemsubtitle)
    - [Timeline.ItemContent](#timelineitemcontent)
- [Example](#example)

## Import

```tsx
import { Timeline } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### Timeline

| Property    | Type           | Default | Required | Description                                |
| ----------- | -------------- | ------- | -------- | ------------------------------------------ |
| `children`  | `ReactNode`    | -       | Yes      | The content rendered inside the component. |
| `className` | `DivClassName` | -       | No       | CSS classes applied to the root element.   |

### Timeline.Item

| Property    | Type           | Default | Required | Description                                |
| ----------- | -------------- | ------- | -------- | ------------------------------------------ |
| `children`  | `ReactNode`    | -       | Yes      | The content rendered inside the component. |
| `icon`      | `string`       | -       | Yes      | Content rendered for the icon.             |
| `className` | `DivClassName` | -       | No       | CSS classes applied to the root element.   |

### Timeline.ItemTitle

| Property    | Type           | Default | Required | Description                                |
| ----------- | -------------- | ------- | -------- | ------------------------------------------ |
| `children`  | `ReactNode`    | -       | Yes      | The content rendered inside the component. |
| `className` | `DivClassName` | -       | No       | CSS classes applied to the root element.   |

### Timeline.ItemSubTitle

| Property    | Type           | Default | Required | Description                                |
| ----------- | -------------- | ------- | -------- | ------------------------------------------ |
| `children`  | `ReactNode`    | -       | Yes      | The content rendered inside the component. |
| `className` | `DivClassName` | -       | No       | CSS classes applied to the root element.   |

### Timeline.ItemContent

| Property    | Type           | Default | Required | Description                                |
| ----------- | -------------- | ------- | -------- | ------------------------------------------ |
| `children`  | `ReactNode`    | -       | Yes      | The content rendered inside the component. |
| `className` | `DivClassName` | -       | No       | CSS classes applied to the root element.   |

## Example

```tsx
"use client";
import { Timeline } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoTimeline() {
    return (
        <Timeline>
            <Timeline.Item icon="mdi:package-variant-closed">
                <Timeline.ItemTitle>Product Shipped</Timeline.ItemTitle>
                <Timeline.ItemSubTitle>13th May 2021</Timeline.ItemSubTitle>
                <Timeline.ItemContent>
                    We shipped your product and it should arrive within 3-5
                    business days.
                </Timeline.ItemContent>
            </Timeline.Item>

            <Timeline.Item icon="mdi:check">
                <Timeline.ItemTitle>Order Confirmed</Timeline.ItemTitle>
                <Timeline.ItemSubTitle>18th May 2021</Timeline.ItemSubTitle>
            </Timeline.Item>
        </Timeline>
    );
}
```
