"use client";
import { CompositionAPI } from "../composition-api";
import {
    DocumentationPage,
    SectionCode,
    SectionOverview,
    SectionPreview,
} from "../../../molecules";
import { DemoTimeline } from "./timeline-preview";
import usage from "./usage.md";

export default function Page() {
    return (
        <DocumentationPage>
            <SectionOverview nav={{ id: "overview", title: "Overview" }}>
                <SectionOverview.Title>Timeline</SectionOverview.Title>
                <SectionOverview.Description>
                    Compound chronological content.
                </SectionOverview.Description>
            </SectionOverview>
            <SectionPreview nav={{ id: "preview", title: "Preview" }}>
                <DemoTimeline />
            </SectionPreview>
            <SectionCode
                nav={{ id: "usage", title: "Usage" }}
                label="TimelineExample.tsx"
            >
                {usage}
            </SectionCode>
            <CompositionAPI component="Timeline" />
        </DocumentationPage>
    );
}
