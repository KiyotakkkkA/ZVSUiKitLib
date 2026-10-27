"use client";
import { Badge, Button, Carousel } from "@kiyotakkkka/zvs-uikit-lib";

const slides = [
    {
        title: "Aurora headphones",
        caption: "40h battery · active noise cancelling",
        price: "$249",
        background: "from-violet-600/70 via-fuchsia-500/40 to-main-900",
    },
    {
        title: "Nimbus smartwatch",
        caption: "Always-on display · 5 ATM water resistance",
        price: "$199",
        background: "from-sky-600/70 via-cyan-500/40 to-main-900",
    },
    {
        title: "Orbit speaker",
        caption: "360° sound · pairs with up to 8 devices",
        price: "$129",
        background: "from-emerald-600/70 via-teal-500/40 to-main-900",
    },
];

export function DemoCarouselGallery() {
    return (
        <Carousel className="h-72 w-full max-w-2xl" loop>
            {slides.map((slide) => (
                <Carousel.Image key={slide.title}>
                    <div
                        className={`flex h-full flex-col justify-end bg-linear-to-br px-20 pb-14 pt-8 ${slide.background}`}
                    >
                        <Badge size="sm" className="mb-3 w-fit">
                            New arrival
                        </Badge>
                        <h3 className="text-2xl font-semibold">
                            {slide.title}
                        </h3>
                        <p className="mt-1 text-sm text-main-200">
                            {slide.caption}
                        </p>
                        <div className="mt-4 flex items-center gap-3">
                            <span className="text-lg font-semibold">
                                {slide.price}
                            </span>
                            <Button size="sm">Add to cart</Button>
                        </div>
                    </div>
                </Carousel.Image>
            ))}
        </Carousel>
    );
}
