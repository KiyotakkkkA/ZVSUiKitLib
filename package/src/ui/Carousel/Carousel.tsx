import { Icon } from "@iconify/react";
import { Children, useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import type { CarouselImageProps, CarouselProps } from "./types";

function CarouselImage({ children, className }: CarouselImageProps) {
    return (
        <div className={cn("h-full w-full shrink-0 overflow-hidden", className)}>
            {children}
        </div>
    );
}

function CarouselRoot({
    children,
    className,
    classNames,
    loop = false,
    autoScroll = false,
    autoScrollTimeout = 5000,
}: CarouselProps) {
    const slides = useMemo(() => Children.toArray(children), [children]);
    const [activeIndex, setActiveIndex] = useState(0);
    const slidesCount = slides.length;
    const maxSlideIndex = Math.max(slidesCount - 1, 0);
    const activeSlideIndex = Math.min(activeIndex, maxSlideIndex);
    const hasMultipleSlides = slidesCount > 1;

    const goToSlide = useCallback(
        (nextIndex: number) => {
            if (slidesCount === 0) {
                return;
            }

            setActiveIndex(Math.min(Math.max(nextIndex, 0), maxSlideIndex));
        },
        [maxSlideIndex, slidesCount],
    );

    const goToPrevious = useCallback(() => {
        setActiveIndex((currentIndex) => {
            const normalizedIndex = Math.min(currentIndex, maxSlideIndex);

            if (normalizedIndex > 0) {
                return normalizedIndex - 1;
            }

            return loop && slidesCount > 0 ? maxSlideIndex : normalizedIndex;
        });
    }, [loop, maxSlideIndex, slidesCount]);

    const goToNext = useCallback(() => {
        setActiveIndex((currentIndex) => {
            const normalizedIndex = Math.min(currentIndex, maxSlideIndex);

            if (normalizedIndex < maxSlideIndex) {
                return normalizedIndex + 1;
            }

            return loop ? 0 : normalizedIndex;
        });
    }, [loop, maxSlideIndex]);

    useEffect(() => {
        if (!autoScroll || !hasMultipleSlides) {
            return;
        }

        const timeout = window.setTimeout(goToNext, autoScrollTimeout);

        return () => window.clearTimeout(timeout);
    }, [activeSlideIndex, autoScroll, autoScrollTimeout, goToNext, hasMultipleSlides]);

    const isPreviousDisabled = !loop && activeSlideIndex === 0;
    const isNextDisabled = !loop && activeSlideIndex === maxSlideIndex;

    return (
        <section
            className={cn(
                "relative overflow-hidden rounded-lg bg-slate-950 text-white",
                className,
            )}
            aria-roledescription="carousel"
        >
            <div
                className="flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
            >
                {slides}
            </div>

            {hasMultipleSlides ? (
                <>
                    <button
                        type="button"
                        className="group absolute inset-y-0 left-0 flex w-16 cursor-pointer items-center justify-start pl-4 text-white transition disabled:pointer-events-none disabled:opacity-45"
                        aria-label="Previous slide"
                        disabled={isPreviousDisabled}
                        onClick={goToPrevious}
                    >
                        <span
                            className={cn(
                                "grid size-9 place-items-center rounded-lg border border-white/35 bg-white/20 shadow-sm backdrop-blur-sm transition group-hover:border-white/55 group-hover:bg-white/35 group-hover:shadow-md group-active:scale-95",
                                classNames?.links,
                            )}
                        >
                            <Icon icon="mdi:chevron-left" className="size-7" />
                        </span>
                    </button>

                    <button
                        type="button"
                        className="group absolute inset-y-0 right-0 flex w-16 cursor-pointer items-center justify-end pr-4 text-white transition disabled:pointer-events-none disabled:opacity-45"
                        aria-label="Next slide"
                        disabled={isNextDisabled}
                        onClick={goToNext}
                    >
                        <span
                            className={cn(
                                "grid size-9 place-items-center rounded-lg border border-white/35 bg-white/20 shadow-sm backdrop-blur-sm transition group-hover:border-white/55 group-hover:bg-white/35 group-hover:shadow-md group-active:scale-95",
                                classNames?.links,
                            )}
                        >
                            <Icon icon="mdi:chevron-right" className="size-7" />
                        </span>
                    </button>

                    <div
                        className={cn(
                            "absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2",
                            classNames?.nav,
                        )}
                    >
                        {slides.map((_, index) => (
                            <button
                                type="button"
                                key={index}
                                className={cn(
                                    "size-3 cursor-pointer rounded-full transition hover:bg-white/70",
                                    activeSlideIndex === index
                                        ? "bg-white"
                                        : "bg-white/45",
                                )}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={
                                    activeSlideIndex === index ? "true" : undefined
                                }
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
                </>
            ) : null}
        </section>
    );
}

export const Carousel = Object.assign(CarouselRoot, {
    Image: CarouselImage,
});