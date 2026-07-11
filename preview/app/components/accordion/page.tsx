import type { Metadata } from "next";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../molecules";
import { AccordionPreview } from "./accordion-preview";
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
                <AccordionPreview />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="AccordionExample.tsx"
            >
                {usage}
            </SectionCode>
        </DocumentationPage>
    );
}
