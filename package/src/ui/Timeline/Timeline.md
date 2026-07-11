# Timeline

## Purpose

Compound timeline for ordered events with icon markers.

## Import

```tsx
import { Timeline } from "@kiyotakkkka/zvs-uikit-lib";
```

## Components

| Component               | Props                           | Description            |
| ----------------------- | ------------------------------- | ---------------------- |
| `Timeline`              | `className`, `children`         | Root timeline wrapper. |
| `Timeline.Item`         | `icon`, `className`, `children` | Timeline event row.    |
| `Timeline.ItemTitle`    | `className`, `children`         | Event title.           |
| `Timeline.ItemSubTitle` | `className`, `children`         | Event subtitle/date.   |
| `Timeline.ItemContent`  | `className`, `children`         | Event body content.    |

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
