"use client";
import { Carousel, Icon } from "@kiyotakkkka/zvs-uikit-lib";

const testimonials = [
    {
        quote: "We replaced three internal component kits with this one and our design reviews got noticeably shorter.",
        name: "Mira Holt",
        role: "Design lead, Northwind",
    },
    {
        quote: "The compound APIs are easy to read. New engineers ship their first screen on day one.",
        name: "Daniel Ruiz",
        role: "Staff engineer, Atlas",
    },
    {
        quote: "Dark theme, keyboard support and sane defaults out of the box. Exactly what our admin panel needed.",
        name: "Yuki Tanaka",
        role: "CTO, Kitsune Labs",
    },
];

export function DemoCarouselTestimonials() {
    return (
        <div className="w-full max-w-2xl space-y-2">
            <Carousel
                className="h-64 border border-main-700/70"
                loop
                autoScroll
                autoScrollTimeout={4000}
            >
                {testimonials.map((item) => (
                    <Carousel.Image key={item.name}>
                        <figure className="flex h-full flex-col items-center justify-center gap-4 px-20 pb-8 text-center">
                            <div className="flex gap-0.5 text-warning-light">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <Icon key={index} icon="star-four-points" />
                                ))}
                            </div>
                            <blockquote className="text-base leading-7 text-main-100">
                                “{item.quote}”
                            </blockquote>
                            <figcaption className="text-sm">
                                <span className="font-semibold text-main-50">
                                    {item.name}
                                </span>
                                <span className="text-main-400">
                                    {" "}
                                    · {item.role}
                                </span>
                            </figcaption>
                        </figure>
                    </Carousel.Image>
                ))}
            </Carousel>
            <p className="font-mono text-xs text-main-500">
                Autoplay pauses on hover or focus · ← → switch slides
            </p>
        </div>
    );
}
