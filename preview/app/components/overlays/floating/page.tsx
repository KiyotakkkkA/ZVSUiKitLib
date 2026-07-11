import type { Metadata } from "next";
import { OverlayAPI } from "../overlay-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoFloating } from "./floating-preview";
import usage from "./usage.md";
export const metadata: Metadata = { title: "Floating" };
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Floating</SectionOverview.Title>
                <SectionOverview.Description>
                    Anchored content shown on hover or focus.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoFloating />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="FloatingExample.tsx"
            >
                {usage}
            </SectionCode>
            <OverlayAPI component="Floating" />
        </DocumentationPage>
    );
}
