"use client";
import { Carousel } from "@kiyotakkkka/zvs-uikit-lib/ui";
const colors = ["#0f766e", "#7c3aed", "#be123c"];
export function CarouselPreview() {
    return (
        <Carousel loop className="docs-carousel">
            {colors.map((color, index) => (
                <Carousel.Image key={color}>
                    <div
                        style={{
                            height: 280,
                            display: "grid",
                            placeItems: "center",
                            background: color,
                            fontSize: 32,
                        }}
                    >
                        Slide {index + 1}
                    </div>
                </Carousel.Image>
            ))}
        </Carousel>
    );
}
