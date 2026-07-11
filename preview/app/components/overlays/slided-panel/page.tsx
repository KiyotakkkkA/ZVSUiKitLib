import type { Metadata } from "next";
import { OverlayAPI } from "../overlay-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoSlidedPanel } from "./slided-panel-preview";
import usage from "./usage.md";
export const metadata: Metadata = {
    title: "SlidedPanel",
    description: "Compound edge drawer.",
};
export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>SlidedPanel</SectionOverview.Title>
                <SectionOverview.Description>
                    Compound edge drawer.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoSlidedPanel />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="SlidedPanelExample.tsx"
            >
                {usage}
            </SectionCode>
            <OverlayAPI component="SlidedPanel" />
        </DocumentationPage>
    );
}
