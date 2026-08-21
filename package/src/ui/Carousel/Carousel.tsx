import styles from "./Carousel.module.css";
import { Icon } from "../_shared/icons";
import { Children, useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import type { CarouselImageProps, CarouselProps } from "./types";

function CarouselImage({ children, className }: CarouselImageProps) {
    return <div className={cn(styles.s0, className)}>{children}</div>;
}

function CarouselRoot({
    children,
    className,
    classNames,
    loop = false,
    autoScroll = false,
    autoScrollTimeout = 5000,
    ref,
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
    }, [
        activeSlideIndex,
        autoScroll,
        autoScrollTimeout,
        goToNext,
        hasMultipleSlides,
    ]);

    const isPreviousDisabled = !loop && activeSlideIndex === 0;
    const isNextDisabled = !loop && activeSlideIndex === maxSlideIndex;

    return (
        <section
            ref={ref}
            className={cn(styles.s1, className)}
            aria-roledescription="carousel"
        >
            <div
                className={styles.s2}
                style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
            >
                {slides}
            </div>

            {hasMultipleSlides ? (
                <>
                    <button
                        type="button"
                        className={styles.s3}
                        aria-label="Previous slide"
                        disabled={isPreviousDisabled}
                        onClick={goToPrevious}
                    >
                        <span className={cn(styles.s4, classNames?.links)}>
                            <Icon icon="chevron-left" className={styles.s5} />
                        </span>
                    </button>

                    <button
                        type="button"
                        className={styles.s6}
                        aria-label="Next slide"
                        disabled={isNextDisabled}
                        onClick={goToNext}
                    >
                        <span className={cn(styles.s7, classNames?.links)}>
                            <Icon icon="chevron-right" className={styles.s8} />
                        </span>
                    </button>

                    <div className={cn(styles.s9, classNames?.nav)}>
                        {slides.map((_, index) => (
                            <button
                                type="button"
                                key={index}
                                className={cn(
                                    styles.s10,
                                    activeSlideIndex === index
                                        ? styles.s11
                                        : styles.s12,
                                )}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={
                                    activeSlideIndex === index
                                        ? "true"
                                        : undefined
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
