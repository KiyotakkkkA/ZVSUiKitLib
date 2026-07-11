# Carousel

## Purpose

Image or content carousel with arrow navigation, dot navigation, optional looping, and optional auto-scroll.

## Import

```tsx
import { Carousel } from "@kiyotakkkka/zvs-uikit-lib";
```

## Props

| Prop              | Type                 | Default | Description                                      |
| ----------------- | -------------------- | ------- | ------------------------------------------------ |
| children          | ReactNode            | -       | Slides. Usually `Carousel.Image` elements.       |
| className         | string               | -       | Root carousel classes.                           |
| classNames        | `CarouselClassNames` | -       | Slot classes for navigation controls.            |
| loop              | boolean              | `false` | Enables wrapping from last to first slide.       |
| autoScroll        | boolean              | `false` | Enables automatic slide switching.               |
| autoScrollTimeout | number               | `5000`  | Delay between auto-scroll steps in milliseconds. |

## Carousel.Image props

| Prop      | Type      | Default | Description            |
| --------- | --------- | ------- | ---------------------- |
| children  | ReactNode | -       | Slide content.         |
| className | string    | -       | Slide wrapper classes. |

## classNames slots

| Slot  | Description                                     |
| ----- | ----------------------------------------------- |
| nav   | Dot navigation wrapper classes.                 |
| links | Previous and next button inner element classes. |

## Example

```tsx
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