import type { Metadata } from "next";
import { CompositionAPI } from "../composition-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { CarouselPreview } from "./carousel-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Carousel",
    description: "Slide carousel.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Carousel</SectionOverview.Title>
                <SectionOverview.Description>
                    Slide viewport with compound Image slides, navigation,
                    looping, and automatic scrolling.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <CarouselPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="CarouselExample.tsx"
            >
                {usage}
            </SectionCode>
            <CompositionAPI component="Carousel" />
        </DocumentationPage>
    );
}
