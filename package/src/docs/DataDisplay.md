# DataDisplay

## Table of contents

- [Import](#import)
- [API](#api)
    - [DataDisplay](#datadisplay)
    - [DataDisplay.Item](#datadisplayitem)
    - [DataDisplay.ItemTopTitle](#datadisplayitemtoptitle)
    - [DataDisplay.ItemTopSubTitle](#datadisplayitemtopsubtitle)
    - [DataDisplay.ItemTopBadge](#datadisplayitemtopbadge)
    - [DataDisplay.ItemContentTitle](#datadisplayitemcontenttitle)
    - [DataDisplay.ItemContentDescription](#datadisplayitemcontentdescription)
    - [DataDisplay.ItemContentIcon](#datadisplayitemcontenticon)
    - [DataDisplay.ItemContentBadge](#datadisplayitemcontentbadge)
- [Example](#example)

## Import

```tsx
import { DataDisplay } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### DataDisplay

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property   | Type                                           | Default        | Required | Description                                        |
| ---------- | ---------------------------------------------- | -------------- | -------- | -------------------------------------------------- |
| `ref`      | `Ref<HTMLDivElement>`                          | -              | No       | Receives the data display root element.            |
| `children` | `ReactNode`                                    | -              | Yes      | The content rendered inside the component.         |
| `bordered` | `boolean`                                      | `true`         | No       | The bordered used by the component.                |
| `rounded`  | [RoundVariants](./dict.md#roundvariants) \| "" | `"rounded-lg"` | No       | The border-radius preset applied to the component. |

### DataDisplay.Item

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property   | Type        | Default | Required | Description                                |
| ---------- | ----------- | ------- | -------- | ------------------------------------------ |
| `children` | `ReactNode` | -       | Yes      | The content rendered inside the component. |

### DataDisplay.ItemTopTitle

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property   | Type        | Default | Required | Description                                |
| ---------- | ----------- | ------- | -------- | ------------------------------------------ |
| `children` | `ReactNode` | -       | Yes      | The content rendered inside the component. |

### DataDisplay.ItemTopSubTitle

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property   | Type        | Default | Required | Description                                |
| ---------- | ----------- | ------- | -------- | ------------------------------------------ |
| `children` | `ReactNode` | -       | Yes      | The content rendered inside the component. |

### DataDisplay.ItemTopBadge

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property   | Type        | Default | Required | Description                                |
| ---------- | ----------- | ------- | -------- | ------------------------------------------ |
| `children` | `ReactNode` | -       | Yes      | The content rendered inside the component. |

### DataDisplay.ItemContentTitle

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property   | Type        | Default | Required | Description                                |
| ---------- | ----------- | ------- | -------- | ------------------------------------------ |
| `children` | `ReactNode` | -       | Yes      | The content rendered inside the component. |

### DataDisplay.ItemContentDescription

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property   | Type        | Default | Required | Description                                |
| ---------- | ----------- | ------- | -------- | ------------------------------------------ |
| `children` | `ReactNode` | -       | Yes      | The content rendered inside the component. |

### DataDisplay.ItemContentIcon

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property   | Type        | Default | Required | Description                                |
| ---------- | ----------- | ------- | -------- | ------------------------------------------ |
| `children` | `ReactNode` | -       | Yes      | The content rendered inside the component. |

### DataDisplay.ItemContentBadge

Extends: `HTMLAttributes<HTMLDivElement>`.

| Property   | Type        | Default | Required | Description                                |
| ---------- | ----------- | ------- | -------- | ------------------------------------------ |
| `children` | `ReactNode` | -       | Yes      | The content rendered inside the component. |

## Example

```tsx
"use client";
import { Icon } from "@iconify/react";
import { DataDisplay } from "@kiyotakkkka/zvs-uikit-lib";

export function DemoDataDisplay() {
    return (
        <DataDisplay>
            <DataDisplay.Item>
                <DataDisplay.ItemTopTitle>Status</DataDisplay.ItemTopTitle>
                <DataDisplay.ItemTopBadge>
                    <span className="text-xs text-main-500">live</span>
                </DataDisplay.ItemTopBadge>
                <DataDisplay.ItemTopSubTitle>
                    Active
                </DataDisplay.ItemTopSubTitle>
            </DataDisplay.Item>

            <DataDisplay.Item>
                <DataDisplay.ItemTopTitle>Owner</DataDisplay.ItemTopTitle>
                <DataDisplay.ItemTopSubTitle>
                    KiyotakkkkA
                </DataDisplay.ItemTopSubTitle>
                <DataDisplay.ItemContentIcon>
                    <Icon icon="mdi:tune-variant" width={18} height={18} />
                </DataDisplay.ItemContentIcon>
                <DataDisplay.ItemContentDescription>
                    Responsible for this workspace.
                </DataDisplay.ItemContentDescription>
                <DataDisplay.ItemContentBadge>
                    <span className="rounded-full bg-main-800 px-2 py-0.5 text-xs text-main-200">
                        online
                    </span>
                </DataDisplay.ItemContentBadge>
            </DataDisplay.Item>
        </DataDisplay>
    );
}
```
