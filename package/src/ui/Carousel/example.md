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
