import type { Metadata } from "next";
import { CompositionAPI } from "../composition-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoAccordion } from "./accordion-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "Accordion",
    description: "Collapsible content section.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Accordion</SectionOverview.Title>
                <SectionOverview.Description>
                    Collapsible compound section with Summary and animated
                    Content.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoAccordion />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="AccordionExample.tsx"
            >
                {usage}
            </SectionCode>
            <CompositionAPI component="Accordion" />
        </DocumentationPage>
    );
}
