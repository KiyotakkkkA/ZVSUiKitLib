# Carousel

## Table of contents

- [Import](#import)
- [API](#api)
    - [Carousel](#carousel)
        - [CarouselClassNames](#carouselclassnames)
    - [Carousel.Image](#carouselimage)
- [Example](#example)

## Import

```tsx
import { Carousel } from "@kiyotakkkka/zvs-uikit-lib";
```

## API

### Carousel

| Property            | Type                 | Default | Required | Description                                    |
| ------------------- | -------------------- | ------- | -------- | ---------------------------------------------- |
| `children`          | `ReactNode`          | -       | Yes      | The content rendered inside the component.     |
| `className`         | `string`             | -       | No       | CSS classes applied to the root element.       |
| `classNames`        | `CarouselClassNames` | -       | No       | CSS classes applied to the component slots.    |
| `loop`              | `boolean`            | `false` | No       | Whether loop is enabled.                       |
| `autoScroll`        | `boolean`            | `false` | No       | The auto scroll used by the component.         |
| `autoScrollTimeout` | `number`             | `5000`  | No       | The auto scroll timeout used by the component. |

### CarouselClassNames

| Property | Description                      |
| -------- | -------------------------------- |
| `nav`    | The nav used by the component.   |
| `links`  | The links used by the component. |

### Carousel.Image

| Property    | Type        | Default | Required | Description                                |
| ----------- | ----------- | ------- | -------- | ------------------------------------------ |
| `children`  | `ReactNode` | -       | Yes      | The content rendered inside the component. |
| `className` | `string`    | -       | No       | CSS classes applied to the root element.   |

## Example

```tsx
"use client";
import { Carousel } from "@kiyotakkkka/zvs-uikit-lib";

export function CarouselPreview() {
    return (
        <Carousel className="h-72" loop autoScroll>
            <Carousel.Image>
                <img
                    src="/images/slide-1.jpg"
                    alt="First slide"
                    className="h-full w-full object-cover"
                />
            </Carousel.Image>
            <Carousel.Image>
                <img
                    src="/images/slide-2.jpg"
                    alt="Second slide"
                    className="h-full w-full object-cover"
                />
            </Carousel.Image>
            <Carousel.Image>
                <img
                    src="/images/slide-3.jpg"
                    alt="Third slide"
                    className="h-full w-full object-cover"
                />
            </Carousel.Image>
        </Carousel>
    );
}
```
